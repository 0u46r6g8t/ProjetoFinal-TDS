import styled from "styled-components";
import { IStyledFonts } from "../interface/IStyled.interface";

const FontH1 = styled.h1<IStyledFonts>`
  font-family: "Open Sans", sans-serif;
  line-height: 48px;
  font-weight: 700;
  font-size: 36px;
  color: ${(props) => props.color};
`;

const FontH2 = styled.h2<IStyledFonts>`
  font-family: "Open Sans", sans-serif;
  line-height: 48px;
  font-weight: 700;
  font-size: 32px;
  color: ${(props) => props.color};
`;

const FontH3 = styled.h3<IStyledFonts>`
  font-family: "Open Sans", sans-serif;
  line-height: 48px;
  font-weight: 700;
  font-size: 26px;
  color: ${(props) => props.color};
`;

const FontH4 = styled.h4<IStyledFonts>`
  font-family: "Open Sans", sans-serif;
  line-height: 48px;
  font-weight: 700;
  font-size: 22px;
  color: ${(props) => props.color};
`;

const FontH5 = styled.h5<IStyledFonts>`
  font-family: "Open Sans", sans-serif;
  line-height: 48px;
  font-weight: 700;
  font-size: 18px;
  color: ${(props) => props.color};
`;

export { FontH1, FontH2, FontH3, FontH4, FontH5 };

// Subtitle

const Subtitle_s1 = styled.p<IStyledFonts>`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  line-height: 24px;
  font-size: 14px;
  color: ${(props) => props.color};
`;

const Subtitle_s2 = styled.p<IStyledFonts>`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  line-height: 24px;
  font-size: 13px;
  color: ${(props) => props.color};
`;

export { Subtitle_s1, Subtitle_s2 };

// Paragraph

const Paragraph_p1 = styled.p<IStyledFonts>`
  font-family: "Open Sans";
  font-weight: 400;
  line-height: 20px;
  font-size: 15px;
  color: ${(props) => props.color};
`;

const Paragraph_p2 = styled.p<IStyledFonts>`
  font-family: "Open Sans";
  font-weight: 400;
  line-height: 18px;
  font-size: 13px;
  color: ${(props) => props.color};
`;

export { Paragraph_p1, Paragraph_p2 };

//  Caption

const Caption_p1 = styled.p<IStyledFonts>`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${(props) => props.color};
`;

const Caption_p2 = styled.p<IStyledFonts>`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${(props) => props.color};
`;

export { Caption_p1, Caption_p2 };

export const FontImage = styled.h1<IStyledFonts>`
  font-family: "Encode Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 84px;
  line-height: 105px;

  color: #e5e3e8;
  bottom: 64px;
  left: 64px;
  position: absolute;
  color: ${(props) => props.color};
`;

export const LabelStyled = styled.label`
  font-family: "Encode Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 21px;
  color: rgba(3, 45, 99, 0.75);
`;

export const FontSimple = styled.h1`
  font-family: "Encode Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
`;

export const FontCard = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20.1504px;
  line-height: 24px;
`;

export const LinkA = styled.a`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  text-decoration-line: underline;

  color: #032d63;
`;
