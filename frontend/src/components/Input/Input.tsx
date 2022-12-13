import React from "react";
import { InputStyled } from "./style";

interface IProps {
  type: string;
  placeHolder: string;
  className?: string;
}

export const InputData = (props: IProps) => {
  return (
    <InputStyled
      className={props.className}
      type={props.type}
      placeholder={props.placeHolder}
    ></InputStyled>
  );
};
