import React from "react";

//images
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
//components
import Messages from "./Messages";
import Input from "./Input";

function Chat() {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
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
