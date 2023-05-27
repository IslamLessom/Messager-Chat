import styled from "styled-components";

export const NavbarS = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  box-shadow: 0 2.8px 0 0 #72727213;
  height: 50px;
  padding: 10px;
  justify-content: center;
  color: black;
`;

export const Logo = styled.span`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500&display=swap");
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 22px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const User = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  background-color: #5d5b8d;
  color: #ddddf7;
  font-size: 10px;
  border: none;
  margin-left: 10px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    position: absolute;
    bottom: 10px;
  }
`;
