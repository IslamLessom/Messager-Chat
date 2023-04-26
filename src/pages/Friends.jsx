import React from "react";
//components
import Sidebar from "../components/Sidebar";
//styled
import { Container, FriendsContent, FriendsS } from "./Friends.elements";

function Friends() {
  return (
    <FriendsS>
      <Container>
        <Sidebar />
        <FriendsContent></FriendsContent>
      </Container>
    </FriendsS>
  );
}

export default Friends;
