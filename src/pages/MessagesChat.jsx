import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import { Home, Container } from "./MessagesChat.elements";

function MessagesChat() {
  return (
    <Home>
      <Container>
        <Sidebar />
        <Chat />
      </Container>
    </Home>
  );
}

export default MessagesChat;
