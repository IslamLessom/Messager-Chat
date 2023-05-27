import styled from "styled-components";

export const MessageS = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const MessageOwner = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  flex-direction: row-reverse;
`;

export const MessageContentOwner = styled.div`
  align-items: flex-end;
  p {
    background-color: #8da4f1;
    color: white;
    padding: 10px 20px;
    border-radius: 10px 0px 10px 10px;
  }
`;

export const MessageInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: gray;
  font-weight: 300;
  

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    
  }
`;

export const MessageContent = styled.div`
  max-width: 80%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  p {
    background-color: white;
    padding: 10px 20px;
    border-radius: 0px 10px 10px 10px;
    max-width: max-content;
  }

  img {
    width: 50%;
  }
`;
