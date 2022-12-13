import React from "react";
import { TextareaStyled } from "./style";

interface IProps {
  placeHolder: string;
  className?: string;
  size?: number;
}

export const TextAreaData = (props: IProps) => {
  return (
    <TextareaStyled
      rows={props.size}
      className={props.className}
      placeholder={props.placeHolder}
    ></TextareaStyled>
  );
};
