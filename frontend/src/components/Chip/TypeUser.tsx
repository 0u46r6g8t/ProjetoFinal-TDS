import React from "react";
import { TypeUserButton } from "../Buttons/TypeUser";
import { TypeUserStyled } from "./styled";

export const ChipTypeUser = () => {
  return (
    <TypeUserStyled>
      <TypeUserButton className="type_left" name="Sou Guia" />
      <TypeUserButton className="type_right" name="Sou Comerciante" />
    </TypeUserStyled>
  );
};
