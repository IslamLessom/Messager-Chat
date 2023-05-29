import styled from "styled-components";

export const FriendsS = styled.div`
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
  background-color: #ebedf0;
  justify-content: center;
`;

export const ContainerFriends = styled.div`
  background-color: white;
  width: 60%;
  border-radius: 10px;
  height: 82%;
  padding-top: 25px;
  padding-bottom: 25px;
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

export const FriendsBlock = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;
  margin: 12px;
`;
export const ImagesBlock = styled.div``;
export const Images = styled.img`
  width: 60px;
  border-radius: 100%;
  height: 60px;
`;
export const NameContainer = styled.div`
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
`
export const Name = styled.h3``;
export const FirstName = styled.h3`
  margin-left: 10px;
  margin-right: 10px;
`;
export const City = styled.p``;
