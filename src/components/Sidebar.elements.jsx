import styled from "styled-components";

export const SidebarS = styled.div`
  flex: 0.8;
  background-color: #ebedf0;
  position: relative;
  color: black;

  @media screen and (max-width: "600px") {
    height: 250px;
  }
`;

export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
