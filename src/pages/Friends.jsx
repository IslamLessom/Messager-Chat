import React, { useContext, useState, useEffect } from "react";
//components
import Sidebar from "../components/Sidebar";
import Menu from "../components/Menu";
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
  NameContainer,
  InputSearchPerson,
  ContainerPerson,
} from "./Friends.elements";
//firebase
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
//context
import { ChatContext } from "../context/UserContext";
import { AuthContext } from "../context/AuthContext";
import Search from "../components/Search";

function Friends() {
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
    <FriendsS>
      <Container>
        <Sidebar />
        <FriendsContent>
          <Menu />
          <ContainerFriends>
            <Search />
            <FriendsBlock>
              {Object.entries(chats)
                ?.sort((a, b) => b[1].date - a[1].date)
                .map((chat) => (
                  <ContainerPerson
                    key={chat[0]}
                    onClick={() => handleSelect(chat[1].userInfo)}
                  >
                    <Images src={chat[1].userInfo.photoURL} />
                    <NameContainer>
                      <Name>{chat[1].userInfo.displayName}</Name>
                      <City>Г.Кизляр</City>
                    </NameContainer>
                  </ContainerPerson>
                ))}
            </FriendsBlock>
          </ContainerFriends>
        </FriendsContent>
      </Container>
    </FriendsS>
  );
}

export default Friends;
