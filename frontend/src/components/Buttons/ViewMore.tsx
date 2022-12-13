import React, { useState } from "react";
import { FontH5 } from "../../style/fonts.style";
import { ButtonTypeStyled, ButtonViewMoreStyled } from "./styled";

interface IProps {
  name: string;
  className?: string;
}

export const ViewMoreButton = ({ className, name }: IProps) => {
  return (
    <ButtonViewMoreStyled className={className}>
      <FontH5 className="font-h5_view">{name}</FontH5>
    </ButtonViewMoreStyled>
  );
};
