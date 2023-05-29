import styled from "styled-components";

export const NewsS = styled.div`
  background-color: #242e42;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  grid-template-columns: 20% 80%;
`;
export const NewsContent = styled.div`
  flex: 2;
  background-color: #ebedf0;
`;

export const ContainerNews = styled.div`
  //scroll start
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  //scroll end
`;

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  margin: 30px 20px 30px 20px;
  color: black;
  width: 65%;
`;
export const ImagesAndName = styled.div`
  display: flex;
  align-items: center;
`;
export const AboutInfo = styled.div`
  margin-left: 10px;
`;
export const Images = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;
export const ImagesPost = styled.img`
  width: 100%;
  height: 500px;
`;
export const Name = styled.p`
  text-align: left;
  width: 150px;
`;
export const DateInfoCreate = styled.p`
  text-align: left;
`;
export const DescriptionBlock = styled.div``;
export const TitleName = styled.h1`
  margin-bottom: 13px;
`;
export const TextPost = styled.p``;
