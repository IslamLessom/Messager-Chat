import styled from "styled-components";

export const ChatsS = styled.div`
  height: 35%;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  position: absolute;
  bottom: 0px;
  background-color: #5d5b8d;
  width: 100%;
  padding: 20px 0 20px 0;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
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
