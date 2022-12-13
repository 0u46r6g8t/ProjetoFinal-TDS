import React from "react";
import { InputData } from "../Input/Input";
import { InputFile } from "../Input/InputFile";
import { TextAreaData } from "../Input/TextArea";
import { FormStyled } from "./style";

interface IProps {
  className?: string;
}

export const FormRegisterContent = ({ className }: IProps) => {
  return (
    <FormStyled className={className}>
      <form action="#" className="data-form">
        <InputData
          type="text"
          className="input-data"
          placeHolder="Informe o nome do conteúdo que vai disponibilizar"
        />
        <InputData
          type="email"
          className="input-data"
          placeHolder="Informe a localização do conteúdo que será disponibilizado"
        />
        <TextAreaData
          className="input-data"
          size={10}
          placeHolder="Informe do que se trata o conteúdo que esta disponibilizando de forma clara e breve."
        />
        <InputFile className="input-data" />
      </form>
    </FormStyled>
  );
};
