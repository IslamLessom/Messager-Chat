import styled from "styled-components";

export const MessagesS = styled.div`
  background-color: #ddddf7;
  padding: 10px;
  height: calc(100% - 160px);
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  @media screen and (max-width: "600px") {
    height: 12%;
  }
`;
