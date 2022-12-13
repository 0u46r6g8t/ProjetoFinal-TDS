import styled from "styled-components";

export const InputStyled = styled.input`
  padding: 9.8px 39.2px 9.8px 16px;
  gap: 16px;

  /* position: absolute;
  width: 440px;
  height: 48px;
  left: 157px;
  top: 316px; */

  background: #f1f3f4;
  border: 2.45px solid #032d63;
  border-radius: 8px;
`;

export const TextareaStyled = styled.textarea`
  padding: 9.8px 39.2px 9.8px 16px;
  gap: 16px;
  background: #f1f3f4;
  border: 2.45px solid #032d63;
  border-radius: 8px;
`;

export const InputFileStyled = styled.div`
  border: 4px dashed rgba(0, 46, 102, 0.3);
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 16px;
  height: 230px;
  border-radius: 8px;

  input[type="file"] {
    display: none;
  }
`;
