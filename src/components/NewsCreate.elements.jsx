import styled from "styled-components";

export const NewsContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
`;
export const Modal = styled.div`
  width: 500px;
  height: 350px;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;
export const Name = styled.h2`
  margin-bottom: 25px;
  padding: 5px;
  border-radius: 10px;
  background-color: #a7bcff;
  color: #131212;
`;
export const AuthorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Images = styled.input`
  margin-bottom: 10px;
`;
export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Author = styled.input`
  margin-bottom: 20px;
  padding-left: 20px;
  border: none;
  width: 400px;
  border-bottom: 1px solid #a7bcff;
  ::placeholder {
    color: rgb(175, 175, 175);
    font-size: 16px;
  }
`;
export const Title = styled.input`
  margin-bottom: 20px;
  padding-left: 20px;
  border: none;
  width: 400px;
  border-bottom: 1px solid #a7bcff;
  ::placeholder {
    color: rgb(175, 175, 175);
    font-size: 16px;
  }
`;
export const Description = styled.input`
  margin-bottom: 20px;
  padding-left: 20px;
  border: none;
  width: 400px;
  border-bottom: 1px solid #a7bcff;
  ::placeholder {
    color: rgb(175, 175, 175);
    font-size: 16px;
  }
`;
export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #8da4f1;
  font-size: 12px;
  cursor: pointer;
  margin-bottom: 10px;
`;
export const Imgs = styled.img`
  width: 32px;
`;
export const TextP = styled.h2``;

export const Exit = styled.button`
  border: none;
  height: 30px;
  background-color: #a7bcff;
  font-size: 17px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 10px;
`