/* eslint-disable react/jsx-pascal-case */
import { ImageBackgroundRegister, Logo } from "../../../assets";
import { FormRegisterType } from "../../../components/Foms/RegisterType";
import {
  FontH2,
  FontImage,
  Paragraph_p1,
  Subtitle_s1,
} from "../../../style/fonts.style";
import { ContainerAuth } from "../../styled.pages";
import { ContainerBackground, ContainerLeft } from "../style";

export const PageRegisterType = () => {
  return (
    <ContainerAuth>
      <ContainerLeft>
        <div className="content">
          <img src={Logo} alt="" width={150} />
        </div>

        <div className="login-form">
          <span className="title-form">
            <FontH2>Entre,</FontH2>

            <span>
              <Paragraph_p1 style={{ fontSize: 28 }}>
                Crie sua Conta
              </Paragraph_p1>
            </span>
          </span>
          <Subtitle_s1
            style={{ color: "#8A8A8A", fontSize: 20, marginTop: 10 }}
          >
            Efetue o login para começar!
          </Subtitle_s1>
        </div>
        <FormRegisterType className="form-data" />
      </ContainerLeft>
      <ContainerBackground background={ImageBackgroundRegister}>
        <FontImage>Viva a melhor experiência</FontImage>
      </ContainerBackground>
    </ContainerAuth>
  );
};
