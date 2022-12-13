import React from "react";
import { Link } from "react-router-dom";
import { FontH5 } from "../../style/fonts.style";
import { ButtonStyled } from "./styled";

interface IProps {
  value: string;
  className?: string;
  link?: string;
}

export const SendButton = (props: IProps) => {
  return (
    <ButtonStyled className={props.className}>
      <Link to={props.link ? props.link?.toString() : ""}>
        <FontH5>{props.value}</FontH5>
      </Link>
    </ButtonStyled>
  );
};
