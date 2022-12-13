import styled from "styled-components";

export const PasseioStyled = styled.div`
  background: #ffffff;
  box-shadow: 0px 8.95575px 22.3894px rgba(218, 224, 235, 0.6);
  border-radius: 8.95575px;
  width: 283.23px;
  height: 263px;
  display: block;

  img {
    box-sizing: border-box;
    height: 162.32px;
    border-top-left-radius: 8.95575px;
    border-top-right-radius: 8.95575px;
  }

  .details-passeio {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 90.68px;
    padding: 13.43px;

    .info-view {
      margin-top: 10px;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-around;
    }
    .view-data {
      align-items: center;
      display: flex;
      flex-direction: row;

      .item_subtitle {
        margin-left: 5px;
      }
    }
  }
`;
