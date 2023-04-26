import React, { useContext, useState } from "react";
//firebase
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";
//context
import { AuthContext } from "./../context/AuthContext";
//styled
import { SearchForm, SearchS, UserChat, UserChatInfo } from "./Search.elements";

function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async (e) => {
    //check whether the group (chats in firestore) exits , if not create
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      //сейчас я пропишу условие , что если между тем человеком которого я нашел и мной нет чатов в моей коллекции то я её создаю
      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });
        //create users chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {
      setErr(true);
    }

    setUser(null);
    setUsername("");
  };

  return (
    <SearchS>
      <SearchForm>
        <input
          type="text"
          placeholder="Найти друга..."
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKey}
          value={username}
        />
      </SearchForm>
      {err && (
        <span style={{ color: "white", padding: "10px" }}>User not found!</span>
      )}
      {user && (
        <UserChat onClick={handleSelect}>
          <img src={user.photoURL} />
          <UserChatInfo>
            <span>{user.displayName}</span>
          </UserChatInfo>
        </UserChat>
      )}
    </SearchS>
  );
}

export default Search;
