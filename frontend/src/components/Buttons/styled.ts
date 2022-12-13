import styled from "styled-components";
import { IStyledProps } from "../../interface/IStyled.interface";

export const ButtonStyled = styled.button`
  /* Secondary Green */

  width: 100%;
  height: 58px;
  left: calc(50% - 437px / 2 - 392.5px);
  padding: 5px;
  top: 504px;

  background: #afe06d;
  box-shadow: 0px 4px 10px #8cc63f;
  border-radius: 8.917px;
  border: 0;
`;

export const ButtonColorStyled = styled.label`
  /* Secondary Green */

  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 14.5714px;
  gap: 10.93px;

  width: 280px;
  height: 48px;

  /* Medium Blue 400 */

  background: #0060dd;
  box-shadow: 4px 4px 10px #68aaff;
  border-radius: 8px;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;

  #font-h5_styled {
    text-align: center;
    text-transform: capitalize;

    color: #ffffff;
  }
`;

export const ButtonTypeStyled = styled.div<IStyledProps>`
  padding: 14px 16px 13px 24px;
  background: #f1f3f4;
  margin: 0;
  color: ${(props) => (props.active ? "white" : "#032D63")};
  background-color: ${(props) => (props.active ? "#0060DD" : "white")};
  width: 100%;
  border: 0;
  text-align: center;
  text-transform: capitalize;

  &:active {
    background-color: #0060dd;
    color: white;
    background: #0060dd;
    box-shadow: 4px 4px 10px #68aaff;
  }
`;

export const ButtonViewMoreStyled = styled.button`
  border: 1.11947px solid #032d63;
  border-radius: 8.95575px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4.47788px 8.95575px;
  gap: 4.48px;
  margin: 0;
  padding: 0;
  background-color: white;
  cursor: pointer;
  transition: ease-in-out 0.3s;

  .font-h5_view {
    margin: -5px 10px;

    &:after {
      content: " >";
    }
  }

  &:hover,
  &:active {
    transform: scale(1.06);
  }
`;
