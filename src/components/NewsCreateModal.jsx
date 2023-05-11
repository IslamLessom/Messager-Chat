import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//images
import Add from "../img/addAvatar.png";
//firebase
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { auth, db, storage } from "../firebase";
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
//components
import { v4 } from "uuid";
//styled
import {
  Author,
  AuthorContainer,
  Description,
  Images,
  Imgs,
  Label,
  Modal,
  Name,
  NewsContainer,
  PostContainer,
  Title,
  TextP,
  Exit,
  Form,
} from "./NewsCreate.elements";

function NewsCreateModal({ setModalPublication }) {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const imageListRef = ref(storage, "images/");

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const author = e.target[0].value;
    const title = e.target[1].value;
    const postText = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const storageRef = ref(storage, title, author, postText);
      const uploadTask = uploadBytesResumable(storageRef, file);
      const postsCollectionRef = collection(db, "posts");
      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await setDoc(doc(db, "posts"), {
              author,
              postText,
              title,
              photoURL: downloadURL,
            });
          });
        }
      );
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <NewsContainer>
      <Modal>
        <Name>Добавить публикацию:</Name>
        <Form onSubmit={handleSubmit}>
          <AuthorContainer>
            <Images
              required
              style={{ display: "none" }}
              type="file"
              id="file"
            />
            <Label htmlFor="file" style={{ marginBottom: "20px" }}>
              <Imgs src={Add} alt="" />
              <TextP>Добавьте изображение</TextP>
            </Label>
            <Author required placeholder="Введите автора" />
          </AuthorContainer>
          <PostContainer>
            <Title required placeholder="Введите название публикации" />
            <Description required placeholder="Введите содержимое" />
          </PostContainer>
          <Exit style={{ marginRight: "20px" }}>Опубликовать</Exit>
          <Exit onClick={() => setModalPublication(false)}>Выход</Exit>
        </Form>
      </Modal>
    </NewsContainer>
  );
}

export default NewsCreateModal;
