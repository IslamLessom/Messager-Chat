import styled from "styled-components";

export const FriendsS = styled.div`
  background-color: #a7bcff;
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

export const FriendsContent = styled.div`
  flex: 2;
  display: grid;
  grid-template-columns: 220px 220px 220px;
  background-color: rgb(221, 221, 247);
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 30px;

  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;
export const FriendsBlock = styled.div`
  position: relative;
  padding: 15px;
  background-color: #5d5b8d;
  border-radius: 10px;
  text-align: center;
  height: 250px;
  width: 180px;
  margin: 10px;
  color: white;
`;
export const ImagesBlock = styled.div`
  background: white;
  padding: 8px;
  border-radius: 8px;
`;
export const Images = styled.img`
  width: 150px;
  border-radius: 8px;
  height: 120px;
`;
export const Name = styled.h3`
  position: absolute;
  bottom: 55px;
  margin-left: 18px;
`;
export const City = styled.p`
  position: absolute;
  bottom: 25px;
  margin-left: 58px;
`;
