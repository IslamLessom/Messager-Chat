import styled from "styled-components";

//#171817b3
//#242e42

//#ebedf0
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

  background-color: #ebedf0;
`;

export const ProfileImages = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  border: 4px solid rgb(23 22 22 / 30%);
`;

export const ContainerProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 2px 2px 2px 3px#5f5f5f1d;
  margin: 0px 30px 0px 30px;
`;

export const ProfileInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const OtherContainerUser = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;

  width: 100%;
`;
export const ProfileName = styled.h1`
  color: black;
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");
  font-family: "Montserrat", sans-serif;
`;
export const ProfileFirstName = styled.h1`
  color: black;
  display: flex;
  p {
    font-size: 25px;
  }
`;

export const ProfileCity = styled.p`
  color: #818cb3;
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");
  font-family: "Montserrat", sans-serif;
`;
export const ProfileFriends = styled.p`
  color: #818cb3;
  margin-left: 25px;
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");
  font-family: "Montserrat", sans-serif;
`;
export const ContainerAdd = styled.div`
  display: flex;
  margin-top: 5px;
`;
export const Add = styled.p`
  color: #53a8ef;
  box-shadow: 2px 2px 2px 2px#1817171d;
  font-size: 16px;
  padding: 7px;
  background-color: #f2f3f5;
  border-radius: 7px;
  cursor: pointer;
`;

export const AddPublication = styled.p`
  color: #53a8ef;
  box-shadow: 2px 2px 2px 2px#1817171d;
  font-size: 16px;
  background-color: #f2f3f5;
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
  background-color: white;
  box-shadow: 2px 2px 2px 3px#5f5f5f1d;
  margin: 0px 30px 0px 30px;
  color: black;
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
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");
  font-family: "Montserrat", sans-serif;
`;
export const NameRecords = styled.h2`
  margin-top: 20px;
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");
  font-family: "Montserrat", sans-serif;
  margin-bottom: 7px;
`;
export const Records = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");
  font-family: "Montserrat", sans-serif;
`;
export const Menu = styled.div`
  height: 50px;
  margin-bottom: 20px;
  background-color: white;
  box-shadow: 0 2.8px 0 0 #72727213;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  color: black;
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
  font-family: 'Montserrat', sans-serif;
`;
