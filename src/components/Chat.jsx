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

function Chat() {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} />
          <img src={Add} />
          <img src={More} />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}

export default Chat;
