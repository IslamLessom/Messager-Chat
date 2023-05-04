import React from "react";
//images
import Add from "../img/addAvatar.png";
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
  return (
    <NewsContainer>
      <Modal>
        <Name>Добавить публикацию:</Name>
        <AuthorContainer>
          <Images style={{ display: "none" }} type="file" id="file" />
          <Label htmlFor="file">
            <Imgs src={Add} alt="" />
            <TextP>Добавьте изображение</TextP>
          </Label>
          <Author placeholder="Введите автора" />
        </AuthorContainer>
        <PostContainer>
          <Title placeholder="Введите название публикации" />
          <Description placeholder="Введите содержимое" />
        </PostContainer>
        <Exit onClick={() => setModalPublication(false)}>Выход</Exit>
      </Modal>
    </NewsContainer>
  );
}

export default NewsCreateModal;
