import styled from "styled-components";

export const Home = styled.div`
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

  @media screen and (max-width: 768px) {
    width: 90%;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    height: 95%;
  }
`;
