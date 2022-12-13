import React from "react";
import { FontH5 } from "../../style/fonts.style";
import { ButtonColor } from "../Buttons/ButtonColor";
import { InputFileStyled } from "./style";

interface IProps {
  className?: string;
}

export const InputFile: React.FC<IProps> = ({ className }) => {
  return (
    <InputFileStyled className={className}>
      <FontH5>Arraste e solte arquivos aqui para enviar</FontH5>
      <ButtonColor value="Escolher arquivo" id="file-input_content" />

      <input type="file" name="" id="file-input_content" />
    </InputFileStyled>
  );
};
