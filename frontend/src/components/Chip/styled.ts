import styled from "styled-components";

export const TypeUserStyled = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 8px 8px 8px 8px;
  border: 2.45px solid #032d63;

  .type_right,
  .type_left {
    margin-bottom: -1px;
  }

  .type_right {
    border-radius: 0px 7px 7px 0px;
    margin-right: -0.2px;
  }
  .type_left {
    margin-left: -0.3px;
    border-radius: 8px 0px 0px 8px;
  }
`;

export const ChipAllStyled = styled.div`
  margin: 46px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
