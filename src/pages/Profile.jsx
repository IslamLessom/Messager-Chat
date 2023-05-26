import React from "react";
//components
import Sidebar from "../components/Sidebar";
//styled
import {
  Container,
  ContainerRecords,
  NameRecords,
  ProfileContent,
  ProfileS,
  Records,
  Title,
  Menu
} from "./Profile.elements";
import ProfileInfoComponents from "../components/ProfileInfoComponents";

function Profile() {
  return (
    <ProfileS>
      <Container>
        <Sidebar />
        <ProfileContent>
          <Menu>
            
          </Menu>
          <ProfileInfoComponents />
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
