import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//images
import Add from "../img/addAvatar.png";
//firebase
import { addDoc, collection } from "firebase/firestore";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
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
} from "./NewsCreate.elements";

function NewsCreateModal({ setModalPublication }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [postText, setPostText] = useState("");

  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);

  const imageListRef = ref(storage, "images/");

  const postsCollectionRef = collection(db, "posts");

  const uploadImage = () => {
    if (imageUpload == null) return;
    const imagesRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imagesRef, imageUpload).then(() => {
      alert("images upload");
    });
  };

  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author,
    });
    navigate("/news");
  };

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setImageList((prev) => [...prev, url]);
          });
        });
      }
    });
  }, []);
  return (
    <NewsContainer>
      <Modal>
        <Name>Добавить публикацию:</Name>
        <AuthorContainer>
          <Images
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
            style={{ display: "none" }}
            type="file"
            id="file"
          />
          <Label htmlFor="file">
            <Imgs src={Add} alt="" />
            <TextP>Добавьте изображение</TextP>
          </Label>
          <Exit onClick={uploadImage}>Добавить изображение</Exit>
          <Author
            placeholder="Введите автора"
            onChange={(event) => {
              setAuthor(event.target.value);
            }}
          />
        </AuthorContainer>
        <PostContainer>
          <Title
            placeholder="Введите название публикации"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <Description
            placeholder="Введите содержимое"
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </PostContainer>
        <Exit onClick={createPost}>Опубликовать</Exit>
        <Exit onClick={() => setModalPublication(false)}>Выход</Exit>
      </Modal>
    </NewsContainer>
  );
}

export default NewsCreateModal;
