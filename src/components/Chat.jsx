import React, { useContext } from "react";

//images
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
//components
import Messages from "./Messages";
import Input from "./Input";
//context
import { ChatContext } from "../context/UserContext";
//styled
import { ChatInfo, ChatIcons, ChatS } from "./Chat.elements";

function Chat() {
  const { data } = useContext(ChatContext);

  return (
    <ChatS>
      <ChatInfo>
        <span>{data.user?.displayName}</span>
        <ChatIcons>
          <img src={Cam} />
          <img src={Add} />
          <img src={More} />
        </ChatIcons>
      </ChatInfo>
      <Messages />
      <Input />
    </ChatS>
  );
}

export default Chat;
