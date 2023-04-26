import styled from "styled-components";

export const SearchS = styled.div`
  border-bottom: 1px solid gray;
  position: absolute;
  bottom: 44.1%;
  background-color: #5d5b8d;
  width: 100%;
`;

export const SearchForm = styled.div`
  padding: 10px;

  input {
    background-color: transparent;
    border: none;
    color: white;
    outline: none;

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
    background-color: #2f2d52;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
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
