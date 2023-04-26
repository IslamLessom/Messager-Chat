import React, { useEffect, useState } from "react";

//components
import Message from "./Message";
//context
import { useContext } from "react";
import { ChatContext } from "../context/UserContext";
//firebase
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
//styled
import { MessagesS } from "./Messages.styled";

function Messages() {
  const [messages, setMessages] = useState([]);
  const [isPaused, setIsPaused] = useState(false);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);
  return (
    <MessagesS >
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </MessagesS>
  );
}

export default Messages;
