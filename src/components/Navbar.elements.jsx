import styled from "styled-components";

export const NavbarS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #242e42;
  height: 50px;
  padding: 10px;
  justify-content: space-between;
  color: #ddddf7;
`;

export const Logo = styled.span`
  font-weight: bold;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const User = styled.div`
  display: flex;
  gap: 10px;
`;

export const Img = styled.img`
  background-color: #ddddf7;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  object-fit: cover;
`;

export const SpanText = styled.span``;

export const Button = styled.button`
  background-color: #5d5b8d;
  color: #ddddf7;
  font-size: 10px;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    position: absolute;
    bottom: 10px;
  }
`;
