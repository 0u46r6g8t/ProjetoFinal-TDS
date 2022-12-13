import React from "react";
import { FontH5 } from "../../style/fonts.style";
import { ButtonColorStyled } from "./styled";

interface IProps {
  value: string;
  className?: string;
  id?: string;
}

export const ButtonColor = (props: IProps) => {
  return (
    <ButtonColorStyled htmlFor={props.id} className={props.className}>
      <FontH5 id="font-h5_styled">{props.value}</FontH5>
    </ButtonColorStyled>
  );
};
