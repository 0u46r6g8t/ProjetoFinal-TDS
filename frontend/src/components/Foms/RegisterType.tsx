import React from "react";
import { LabelStyled, Paragraph_p1 } from "../../style/fonts.style";
import { AlternativeLogin } from "../AlternativeLogin";
import { SendButton } from "../Buttons/SendForm";
import { ChipTypeUser } from "../Chip/TypeUser";
import { InputData } from "../Input/Input";
import { FormStyled } from "./style";

interface IProps {
  className?: string;
}

export const FormRegisterType = ({ className }: IProps) => {
  return (
    <FormStyled className={className}>
      <form action="#" className="data-form">
        <InputData
          type="text"
          className="input-data"
          placeHolder="Ricardo Santos"
        />
        <InputData
          type="email"
          className="input-data"
          placeHolder="ricasantos@pax50.com.br"
        />
        <Paragraph_p1 color="#032D63BF" className="paragraph-question">
          Qual opção se adequa a você?
        </Paragraph_p1>

        <ChipTypeUser />

        <div className="terms">
          <input type="checkbox" name="" id="terms-id" />
          <LabelStyled htmlFor="terms-id">
            Estou ciente dos <a href="#">Termos de uso</a> e{" "}
            <a href="Políticas">Políticas</a> da Pax50.
          </LabelStyled>
        </div>
      </form>
      <SendButton value="Continuar >" className="button-send" />
    </FormStyled>
  );
};
