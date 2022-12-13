import React from "react";
import { IFrameStyled } from "./styled";

interface IProps {
  className?: string;
  src: string;
}

export const IFrame: React.FC<IProps> = ({ className, src }) => {
  return <IFrameStyled>IFrame</IFrameStyled>;
};
