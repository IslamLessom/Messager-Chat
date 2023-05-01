import styled from "styled-components";

export const NewsS = styled.div`
  background-color: #a7bcff;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  border-radius: 10px;
  width: 85%;
  height: 87%;
  display: flex;
  overflow: hidden;
  grid-template-columns: 20% 80%;
`;
export const NewsContent = styled.div`
  flex: 2;
  background-color: rgb(221, 221, 247);

  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

`;

export const NewsContainer = styled.div`
  display: flex;
  background-color: #5d5b8d;
  border-radius: 10px;
  padding: 20px;
  margin: 30px 20px 30px 20px;
  color: white;
`;
export const ImagesAndName = styled.div``;
export const Images = styled.img`
  width: 250px;
  height: 200px;
  border-radius: 10px;
`;
export const Name = styled.h2`
  text-align: center;
`;
export const DescriptionBlock = styled.div`
  padding-left: 30px;
`;
export const TitleName = styled.h1`
  margin-bottom: 13px;
`;
export const TextPost = styled.p`
`;
