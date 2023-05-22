import styled from "styled-components";

export const ChatS = styled.div`
  flex: 2;
`;

export const ChatInfo = styled.div`
  height: 50px;
  background-color: #242e42;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  color: lightgray;
`;

export const ChatIcons = styled.div`
  display: flex;
  gap: 10px;

  img {
    height: 24px;
    cursor: pointer;
  }
`;
