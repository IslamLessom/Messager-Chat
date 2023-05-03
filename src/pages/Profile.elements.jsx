import styled from "styled-components";

export const ProfileS = styled.div`
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
export const ProfileContent = styled.div`
  flex: 2;

  background-color: rgb(221, 221, 247);
  padding: 30px;
`;

export const ProfileImages = styled.img`
  width: 30%;
  height: 180px;
  border-radius: 15px;
`;

export const ContainerProfileInfo = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  background-color: #5d5b8d;
  padding: 30px;
  border-radius: 8px;
`;

export const ProfileInfo = styled.div``;
export const NameContainer = styled.div`
  display: flex;
`
export const ProfileName = styled.h1`
  color: white;
  padding-bottom: 15px;
  padding-left: 10px;
`;
export const ProfileFirstName = styled.h1`
  color: white;
  padding-bottom: 15px;
`;

export const ProfileCity = styled.p`
  color: white;
  padding-bottom: 10px;
`;
export const ProfileFriends = styled.p`
  color: white;
  padding-bottom: 10px;
`;
export const ContainerAdd = styled.div`
`;
export const Add = styled.p`
  position: absolute;
  bottom: 25px;
  color: white;
  font-size: 20px;
`;

export const AddPublication = styled.p`
  position: absolute;
  bottom: 55px;
  color: white;
  font-size: 20px;
`

//records
export const ContainerRecords = styled.div`
  height: 50%;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  background-color: #5d5b8d;
  color: white;
  margin-top: 30px;
  padding: 20px;
  border-radius: 8px;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;
export const Title = styled.h1`
  margin-bottom: 13px;
`;
export const NameRecords = styled.h2`
  margin-top: 20px;
`;
export const Records = styled.p``;
