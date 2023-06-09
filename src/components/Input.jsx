import React, { useContext, useState } from "react";
//images
import Img from "../img/img.png";
import Attach from "../img/attach.png";
//context
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/UserContext";
//firebase
import {
  Timestamp,
  arrayUnion,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
//components
import { v4 as uuid } from "uuid";
import { InputS, Send } from "./Input.elements";

function Input() {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const [emptytext, setEmptytext] = useState("Введите что нибудь..");

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);



  const handleSend = async () => {
    if (text != "" || img != null) {
      if (img) {
        const storageRef = ref(storage, uuid());

        const uploadTask = uploadBytesResumable(storageRef, img);

        uploadTask.on(
          (error) => {
            //TODO:Handle Error
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(
              async (downloadURL) => {
                await updateDoc(doc(db, "chats", data.chatId), {
                  messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: currentUser.uid,
                    date: Timestamp.now(),
                    img: downloadURL,
                  }),
                });
              }
            );
          }
        );
      } else {
        await updateDoc(doc(db, "chats", data.chatId), {
          messages: arrayUnion({
            id: uuid(),
            text,
            senderId: currentUser.uid,
            date: Timestamp.now(),
          }),
        });
      }

      await updateDoc(doc(db, "userChats", currentUser.uid), {
        [data.chatId + ".lastMessage"]: {
          text,
        },
        [data.chatId + ".date"]: serverTimestamp(),
      });

      await updateDoc(doc(db, "userChats", data.user.uid), {
        [data.chatId + ".lastMessage"]: {
          text,
        },
        [data.chatId + ".date"]: serverTimestamp(),
      });

      setText("");
      setImg(null);
    } else {
      setEmptytext("Введите пожалуста текст");
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSend();
  };

  return (
    <InputS>
      <input
        type="text"
        placeholder={emptytext}
        onChange={(e) => setText(e.target.value)}
        value={text}
        onKeyDown={handleKey}
      />
      <Send>
        <img src={Attach} />
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={(e) => setImg(e.target.files[0])}
          onKeyDown={handleKey}
        />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button onClick={handleSend}>Отправить</button>
      </Send>
    </InputS>
  );
}

export default Input;
