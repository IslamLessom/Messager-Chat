import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavigateS = styled.div`
  color: black;
  margin: 8px 0 30px 15px;
  font-size: 28px;

  display: flex;
  justify-content: flex-end;

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ImagesLink = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: 1px black solid;
  margin-right: 3px;
`;

export const DisplayFirstName = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500&display=swap");
  font-family: "Montserrat", sans-serif;
  margin-right: 5px;
  font-size: 28px;

  :hover {
    border-bottom: 1px solid black;
  }
`;

export const LinksText = styled.p`
  :hover {
    border-bottom: 1px solid black;
  }
`;

export const Links = styled(NavLink)`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500&display=swap");
  font-family: "Montserrat", sans-serif;
  display: flex;
  align-items: center;
  list-style-type: none;
  padding-top: 15px;
  color: black;
  text-decoration: none;
`;

export const ButtonsExit = styled.button`
  width: 36%;
  border: none;
  background-color: rgb(144, 168, 255);
  border-radius: 6px;
  color: white;
  font-size: 16px;
  height: 28px;
  cursor: pointer;
`;
export const UserName = styled.p`
`
