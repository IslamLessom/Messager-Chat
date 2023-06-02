import styled from "styled-components";

export const FormContainer = styled.div`
  background-color: #ebedf0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormWrapper = styled.div`
  background-color: white;
  box-shadow: #00000033 5px 5px 5px;
  padding: 20px 60px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const Logo = styled.span`
  color: #5d5b8d;
  font-weight: bold;
  font-size: 24px;
`;

export const Title = styled.span`
  color: #5d5b8d;
  font-size: 12px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Input = styled.input`
  padding: 15px;
  border: none;
  width: 250px;
  border-bottom: 1px solid #a7bcff;
  &::placeholder {
    color: rgb(175, 175, 175);
  }
`;

export const Button = styled.button`
  background-color: #7b96ec;
  color: white;
  padding: 10px;
  font-weight: bold;
  border: none;
  cursor: pointer;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #8da4f1;
  font-size: 12px;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 32px;
`;

export const Text = styled.p`
  color: #5d5b8d;
  font-size: 12px;
  margin-top: 10px;
`;

export const Description = styled.span`
  color: #5d5b8d;
  font-size: 12px;
  margin-top: 10px;
`;
