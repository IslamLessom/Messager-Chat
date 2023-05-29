import React from "react";
//components
import Sidebar from "../components/Sidebar";
//styled
import {
  City,
  Container,
  FriendsBlock,
  FriendsContent,
  FriendsS,
  Images,
  ImagesBlock,
  Name,
  ContainerFriends,
  FirstName,
  NameContainer
} from "./Friends.elements";
import Menu from "../components/Menu";

function Friends() {
  return (
    <FriendsS>
      <Container>
        <Sidebar />
        <FriendsContent>
          <Menu />
          <ContainerFriends>
            <FriendsBlock>
              <Images src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" />
              <NameContainer>
                <Name>Ислам</Name>
                <FirstName>Гасанов</FirstName>
              </NameContainer>
              <City>Г.Кизляр</City>
            </FriendsBlock>
            
          </ContainerFriends>
        </FriendsContent>
      </Container>
    </FriendsS>
  );
}

export default Friends;
