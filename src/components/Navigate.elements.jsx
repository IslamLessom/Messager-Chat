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

export const DisplayFirstName = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500&display=swap");
  font-family: "Montserrat", sans-serif;
  margin-right: 5px;
  font-size: 28px;
`;

export const LinksText = styled.p``

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
