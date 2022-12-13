/* eslint-disable react/jsx-pascal-case */
import { Link } from "react-router-dom";
import { ImageBackgroundRegister, Logo } from "../../../assets";
import { FormRegister } from "../../../components/Foms/Register";
import {
  FontH2,
  FontImage,
  Paragraph_p1,
  Subtitle_s1,
} from "../../../style/fonts.style";
import { ContainerAuth } from "../../styled.pages";
import { ContainerBackground, ContainerLeft } from "../style";

export const PageRegister = () => {
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
              <Link to="/login">
                <Paragraph_p1 style={{ fontSize: 28 }}>Logar</Paragraph_p1>
              </Link>
            </span>
          </span>
          <Subtitle_s1
            style={{ color: "#8A8A8A", fontSize: 20, marginTop: 10 }}
          >
            Efetue o login para começar!
          </Subtitle_s1>
        </div>
        <FormRegister className="form-data" />
      </ContainerLeft>
      <ContainerBackground background={ImageBackgroundRegister}>
        <FontImage>Viva a melhor experiência</FontImage>
      </ContainerBackground>
    </ContainerAuth>
  );
};
