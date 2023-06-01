import styled from "styled-components";

export const SearchS = styled.div`
  margin-top: 70px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
`;

export const SearchForm = styled.div`
  padding: 10px;
  background-color: rgb(77, 110, 231);
  border-bottom: 1px solid gray;
  border-radius: 10px;
  color: black;
  width: 80%;
  input {
    background-color: transparent;
    border: none;
    color: white;
    outline: none;
    cursor: pointer;
    &::placeholder {
      color: lightgray;
    }
  }
`;

export const UserChat = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  cursor: pointer;
  width: 180px;

  &:hover {
    background-color: #777676;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    object-fit: cover;
  }
`;

export const UserChatInfo = styled.div`
  span {
    font-size: 18px;
    font-weight: 500;
  }
  p {
    font-size: 14px;
    color: lightgray;
  }
`;
