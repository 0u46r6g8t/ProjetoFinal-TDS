import styled from "styled-components";
import { IStyledProps } from "../../interface/IStyled.interface";

export const ContainerLeft = styled.div<IStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
  width: 50%;
  height: 100%;
  padding: 10px;

  .login-form {
    margin: 40px 0 30px;
    width: 60%;
    display: block;

    .title-form {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }

  .form-data {
    width: 420px;
  }
`;

export const ContainerBackground = styled.div<IStyledProps>`
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-position: 0%;
  background-size: 100% cover;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  height: 100%;
  width: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
`;
