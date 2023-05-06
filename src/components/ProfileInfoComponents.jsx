import React, { useState, useEffect, useContext } from "react";
//styles
import {
  Add,
  AddPublication,
  ContainerAdd,
  ContainerProfileInfo,
  NameContainer,
  ProfileCity,
  ProfileFirstName,
  ProfileFriends,
  ProfileImages,
  ProfileInfo,
  ProfileName,
} from "../pages/Profile.elements";
//components
import NewsCreateModal from "./NewsCreateModal";
//firebase
import { db } from "../firebase";
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";

function ProfileInfoComponents() {
  const [chats, setChats] = useState([]);
  const [profile, setProfile] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //firebase
  const profileCollectionRef = collection(db, "users");
  //modal
  const [modalAdd, setModalAdd] = useState(false);
  const [modalPublication, setModalPublication] = useState(false);
  //context
  const { currentUser } = useContext(AuthContext);

  const allMassive = profile.map((item) => item.uid);
  const profileUid = currentUser.uid;
  const myProfile = allMassive.indexOf(profileUid);

  useEffect(() => {
    const getProfile = async () => {
      const data = await getDocs(profileCollectionRef);
      setProfile(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProfile().finally(() => setIsLoading(false));

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

  let count = 0;
  for (let key in chats) {
    count++;
  }

  if (isLoading) {
    return (
      <h1
        style={{
          textAlign: "center",
          marginTop: "100px",
          fontSize: "40px",
        }}
      >
        Загрузка....
      </h1>
    );
  }

  return (
    <ContainerProfileInfo>
      <ProfileImages src={profile[myProfile].photoURL} />
      <ProfileInfo>
        <NameContainer>
          <ProfileFirstName>
            {profile[myProfile].displayFirstName}
          </ProfileFirstName>
          <ProfileName>{profile[myProfile].displayName}</ProfileName>
        </NameContainer>
        <ProfileCity>Город - {profile[myProfile].city}</ProfileCity>
        <ProfileFriends>Друзей - {count}</ProfileFriends>
        <ContainerAdd>
          <Add onClick={() => setModalAdd(true)}>Добавить запись</Add>
          {modalPublication === true && (
            <NewsCreateModal setModalPublication={setModalPublication} />
          )}
          <AddPublication onClick={() => setModalPublication(true)}>
            Добавить публицию
          </AddPublication>
          {modalPublication === true && (
            <NewsCreateModal setModalPublication={setModalPublication} />
          )}
        </ContainerAdd>
      </ProfileInfo>
    </ContainerProfileInfo>
  );
}

export default ProfileInfoComponents;
