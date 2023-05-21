import styled from "styled-components";

//#171817b3
//#242e42

export const ProfileS = styled.div`
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
export const ProfileContent = styled.div`
  flex: 2;

  background-color: white;
  padding: 30px;
`;

export const ProfileImages = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 100%;
  border: 4px solid rgb(23 22 22 / 30%);
`;

export const ContainerProfileInfo = styled.div`
  display: flex;
  background-color: #242e42;
  padding: 30px;
  border-radius: 8px;
`;

export const ProfileInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 50px;
  justify-content: center;
`;
export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const OtherContainerUser = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;
export const ProfileName = styled.h1`
  color: white;
`;
export const ProfileFirstName = styled.h1`
  color: white;
  display: flex;
`;

export const ProfileCity = styled.p`
  color: white;
`;
export const ProfileFriends = styled.p`
  color: white;
  margin-left: 25px;
`;
export const ContainerAdd = styled.div`
  display: flex;
  margin-top: 5px;
`;
export const Add = styled.p`
  color: white;
  font-size: 16px;
  padding: 7px;
  background-color: rgb(253, 253, 253, 0.39);
  border-radius: 7px;
  cursor: pointer;
`;

export const AddPublication = styled.p`
  color: white;
  font-size: 16px;
  background-color: rgb(253, 253, 253, 0.39);
  border-radius: 7px;
  padding: 7px;
  margin-left: 15px;
  cursor: pointer;
`;

//records
export const ContainerRecords = styled.div`
  height: 50%;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  background-color: #242e42;
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
