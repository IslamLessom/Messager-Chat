import React, { useContext } from "react";
//context
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/UserContext";
//styled
import { MessageS, MessageContent, MessageInfo, MessageOwner, MessageContentOwner } from "./Message.styled";
// className={`message ${message.senderId === currentUser.uid && "owner"}`}
function Message({ message }) {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  return (
    <>
      {message.senderId === currentUser.uid ? (
        <MessageS>
          <MessageInfo>
            <img
              src={
                message.senderId === currentUser.uid
                  ? currentUser.photoURL
                  : data.user.photoURL
              }
            />
            <span>just now</span>
          </MessageInfo>
          <MessageContent>
            <p>{message.text}</p>
            {message.img && <img src={message.img} />}
          </MessageContent>
        </MessageS>
      ) : (
        <MessageOwner>
          <MessageInfo>
            <img
              src={
                message.senderId === currentUser.uid
                  ? currentUser.photoURL
                  : data.user.photoURL
              }
            />
            <span>just now</span>
          </MessageInfo>
          <MessageContentOwner>
            <p>{message.text}</p>
            {message.img && <img src={message.img} />}
          </MessageContentOwner>
        </MessageOwner>
      )}
    </>
  );
}

export default Message;
