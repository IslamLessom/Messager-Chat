import React, { useContext, useEffect, useState } from "react";
//context
import { AuthContext } from "../context/AuthContext";
//firebase
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
//components
import Sidebar from "../components/Sidebar";
//styled
import {
  Add,
  Container,
  ContainerAdd,
  ContainerProfileInfo,
  ContainerRecords,
  NameRecords,
  ProfileCity,
  ProfileContent,
  ProfileFriends,
  ProfileImages,
  ProfileInfo,
  ProfileName,
  ProfileS,
  Records,
  Title,
} from "./Profile.elements";
import { ChatContext } from "../context/UserContext";

function Profile() {
  const { currentUser } = useContext(AuthContext);

  return (
    <ProfileS>
      {console.log(currentUser)}
      <Container>
        <Sidebar />
        <ProfileContent>
          <ContainerProfileInfo>
            <ProfileImages src={currentUser.photoURL} />
            <ProfileInfo>
              <ProfileName>{currentUser.displayFirstName}</ProfileName>
              <ProfileName>{currentUser.displayName}</ProfileName>
              <ProfileCity>Город - Кизляр</ProfileCity>
              <ProfileFriends>Друзей - 10</ProfileFriends>
              <ContainerAdd>
                <Add>Добавить запись</Add>
              </ContainerAdd>
            </ProfileInfo>
          </ContainerProfileInfo>
          <ContainerRecords>
            <Title>Мои Записи:</Title>
            <NameRecords>Как я провел лето</NameRecords>
            <Records>
              Как я провел лето Как я провел лето Как я провел лето Как я провел
              лето Как я провел лето Как я провел лето Как я провел лето Как я
              провел лето Как я провел лето Как я провел лето Как я провел лето
              Как я провел лето Как я провел лето Как я провел лето Как я провел
              лето
            </Records>
            <NameRecords>Как я провел лето</NameRecords>
            <Records>
              Как я провел лето Как я провел лето Как я провел лето Как я провел
              лето Как я провел лето Как я провел лето Как я провел лето Как я
              провел лето Как я провел лето Как я провел лето Как я провел лето
              Как я провел лето Как я провел лето Как я провел лето Как я провел
              лето
            </Records>
            <NameRecords>Как я провел лето</NameRecords>
            <Records>
              Как я провел лето Как я провел лето Как я провел лето Как я провел
              лето Как я провел лето Как я провел лето Как я провел лето Как я
              провел лето Как я провел лето Как я провел лето Как я провел лето
              Как я провел лето Как я провел лето Как я провел лето Как я провел
              лето
            </Records>
          </ContainerRecords>
        </ProfileContent>
      </Container>
    </ProfileS>
  );
}

export default Profile;
