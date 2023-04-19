import React, { useEffect, useState } from "react";

//components
import Message from "./Message";
//context
import { useContext } from "react";
import { ChatContext } from "../context/UserContext";
//firebase
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

function Messages() {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);
  return (
    <div className="messages">
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
}

export default Messages;
