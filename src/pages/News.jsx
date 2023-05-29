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
  ContainerNews,
  DateInfoCreate,
  AboutInfo,
  ImagesPost
} from "./News.elements";
import Menu from "../components/Menu";

function News() {
  return (
    <NewsS>
      <Container>
        <Sidebar />
        <NewsContent>
          <Menu />
          <ContainerNews>
            <NewsContainer>
              <ImagesAndName>
                <Images src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" />
                <AboutInfo>
                  <Name>Гасанов Ислам</Name>
                  <DateInfoCreate>12.12.2023</DateInfoCreate>
                </AboutInfo>
              </ImagesAndName>
              <DescriptionBlock>
                <TitleName>Это был отличный день</TitleName>
                <ImagesPost src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" />
                <TextPost>
                  Это был отличный день Это был отличный день Это был отличный
                  день Это был отличный день Это был отличный день Это был
                  отличный день
                </TextPost>
              </DescriptionBlock>
            </NewsContainer>
          </ContainerNews>
        </NewsContent>
      </Container>
    </NewsS>
  );
}

export default News;
