import React, { useState, useEffect, useContext } from "react";
//firebase
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
//context
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/UserContext";
//styled
import { ChatsS } from "./Chats.elements";
import { UserChat, UserChatInfo } from "./Search.elements";

function Chats() {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <ChatsS>
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <UserChat
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
            style={{
              backgroundColor: "rgb(56 88 207)",
              margin: "5px",
              borderRadius: "6px",
            }}
          >
            <img src={chat[1].userInfo.photoURL} />
            <UserChatInfo>
              <span>{chat[1].userInfo.displayName}</span>
              <p>{chat[1].lastMessage?.text}</p>
            </UserChatInfo>
          </UserChat>
        ))}
    </ChatsS>
  );
}

export default Chats;
