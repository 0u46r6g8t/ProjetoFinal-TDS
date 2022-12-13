import React from "react";
import { FontSimple, LinkA } from "../../style/fonts.style";
import { ChipAllStyled } from "./styled";

interface IProps {
  name: string;
}

export const ChipViewAll: React.FC<IProps> = ({ name }) => {
  return (
    <ChipAllStyled>
      <FontSimple>{name}</FontSimple>
      <LinkA href="#">Ver todos</LinkA>
    </ChipAllStyled>
  );
};
