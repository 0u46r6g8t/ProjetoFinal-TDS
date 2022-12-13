import React, { useState } from "react";
import { ButtonTypeStyled } from "./styled";

interface IProps {
  name: string;
  className?: string;
}

export const TypeUserButton = ({ className, name }: IProps) => {
  const [stateActive, setSetActive] = useState(false);

  return (
    <ButtonTypeStyled
      active={stateActive}
      onClick={() => setSetActive(!stateActive)}
      className={className}
    >
      {name}
    </ButtonTypeStyled>
  );
};
