/* eslint-disable no-restricted-globals */
import { Link } from "react-router-dom";
import { ImageBackgroundLogin, Logo } from "../../assets";
import { FormLogin } from "../../components/Foms/Login";
import {
  FontH2,
  FontImage,
  Paragraph_p1,
  Subtitle_s1,
} from "../../style/fonts.style";
import { ContainerAuth } from "../styled.pages";
import { ContainerBackground, ContainerLeft } from "./style";

export const PageLogin = () => {
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
              <Link to="/register">
                <Paragraph_p1 style={{ fontSize: 28 }}>
                  Crie sua Conta
                </Paragraph_p1>
              </Link>
            </span>
          </span>
          <Subtitle_s1
            style={{ color: "#8A8A8A", fontSize: 20, marginTop: 10 }}
          >
            Efetue o login para começar!
          </Subtitle_s1>
        </div>
        <div className="content-form">
          <FormLogin className="form-data" />
        </div>
      </ContainerLeft>
      <ContainerBackground background={ImageBackgroundLogin}>
        <FontImage>Viva a melhor experiência</FontImage>
      </ContainerBackground>
    </ContainerAuth>
  );
};
