import React from "react";
import { FormRegisterContent } from "../../components/Foms/RegisterContent";
import { IFrame } from "../../components/Iframe";
import { NavBar } from "../../components/NavBar";
import { ContentStyled } from "../styled.pages";

export const RegisterContent = () => {
  return (
    <ContentStyled>
      <NavBar />

      <div className="content-data">
        <div className="content-right">
          <FormRegisterContent className="form-content_register" />
        </div>
        <div className="content-left">
          <div className="frame-main">
            <IFrame src="" className="frame-main_start" />
          </div>
          <div className="images"></div>
        </div>
      </div>
    </ContentStyled>
  );
};
