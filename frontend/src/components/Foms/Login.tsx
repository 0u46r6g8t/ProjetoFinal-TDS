import React from "react";
import { AlternativeLogin } from "../AlternativeLogin";
import { SendButton } from "../Buttons/SendForm";
import { InputData } from "../Input/Input";
import { FormStyled } from "./style";

interface IProps {
  className?: string;
}

export const FormLogin = ({ className }: IProps) => {
  return (
    <FormStyled className={className}>
      <form action="#" className="data-form">
        <InputData
          type="text"
          className="input-data"
          placeHolder="exemplo: ricasantos@pax50.com.br"
        />
        <InputData
          className="input-data"
          type="password"
          placeHolder="*********"
        />
        <span>
          <input
            style={{ marginRight: 10 }}
            type="checkbox"
            name=""
            id="check-remember"
          />
          <label htmlFor="check-remeber">Lembrar de mim</label>
        </span>
      </form>
      <SendButton value="Entrar" className="button-send" link="/" />
      <AlternativeLogin />
    </FormStyled>
  );
};
