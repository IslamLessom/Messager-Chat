import React from "react";
//components
import Sidebar from "../components/Sidebar";
//styled
import {
  Container,
  DescriptionBlock,
  Images,
  ImagesAndName,
  Name,
  NewsContainer,
  NewsContent,
  NewsS,
  TextPost,
  TitleName,
} from "./News.elements";
import Menu from "../components/Menu";

function News() {
  return (
    <NewsS>
      <Container>
        <Sidebar />
        <NewsContent>
          <Menu />
          <NewsContainer>
            <ImagesAndName>
              <Images src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" />
              <Name>Гасанов Ислам</Name>
            </ImagesAndName>
            <DescriptionBlock>
              <TitleName>Это был отличный день</TitleName>
              <TextPost>
                Это был отличный день Это был отличный день Это был отличный
                день Это был отличный день Это был отличный день Это был
                отличный день
              </TextPost>
            </DescriptionBlock>
          </NewsContainer>
          <NewsContainer>
            <ImagesAndName>
              <Images src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" />
              <Name>Гасанов Ислам</Name>
            </ImagesAndName>
            <DescriptionBlock>
              <TitleName>Это был отличный день</TitleName>
              <TextPost>
                Это был отличный день Это был отличный день Это был отличный
                день Это был отличный день Это был отличный день Это был
                отличный день
              </TextPost>
            </DescriptionBlock>
          </NewsContainer>
          <NewsContainer>
            <ImagesAndName>
              <Images src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" />
              <Name>Гасанов Ислам</Name>
            </ImagesAndName>
            <DescriptionBlock>
              <TitleName>Это был отличный день</TitleName>
              <TextPost>
                Это был отличный день Это был отличный день Это был отличный
                день Это был отличный день Это был отличный день Это был
                отличный день
              </TextPost>
            </DescriptionBlock>
          </NewsContainer>
          <NewsContainer>
            <ImagesAndName>
              <Images src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" />
              <Name>Гасанов Ислам</Name>
            </ImagesAndName>
            <DescriptionBlock>
              <TitleName>Это был отличный день</TitleName>
              <TextPost>
                Это был отличный день Это был отличный день Это был отличный
                день Это был отличный день Это был отличный день Это был
                отличный день
              </TextPost>
            </DescriptionBlock>
          </NewsContainer>
        </NewsContent>
      </Container>
    </NewsS>
  );
}

export default News;
