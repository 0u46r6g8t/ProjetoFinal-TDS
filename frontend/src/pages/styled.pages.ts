import styled from "styled-components";

export const ContainerAuth = styled.div`
  position: absolute;
  width: 1442px;
  height: 852px;
  left: 250px;
  top: 54px;

  /* Dark Blue */
  border: 1px solid #112b4c;
  border-radius: 12px;
`;

export const ContainerHome = styled.div`
  .content-data {
    display: flex;
    flex-direction: column;
    width: 84.5%;
    margin: 32px auto;

    .category-search {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .filters-category {
        display: flex;
        width: 50%;
        margin-top: 36px;
        justify-content: space-between;

        .item-search {
          margin-right: 36px;
        }
      }

      .button-continue {
        width: 285px;
      }
    }

    .results {
      margin-top: 34px;

      .cards-list {
        margin-top: 16px;
        display: flex;
        justify-content: flex-start;

        .cards-passeios {
          margin: 0 12px 0 0;
        }
      }
    }
  }

  .item-search {
    font-size: 24px;
  }
`;

export const ContentStyled = styled.div`
  .content-data {
    width: 84.5%;
    margin: 32px auto;
    display: flex;
    position: absolute;
    left: 8%;
    right: 8%;
    flex-direction: row;

    .content-left,
    .content-right {
      display: flex;
      justify-content: center;
    }
    .content-left {
      display: flex;
      margin-left: 32px;
      width: 50%;
      height: 672px;
      border: 1px solid black;

      .frame-main {
        width: 100%;

        .frame-main_start {
          border: 1px solid red;
        }
      }

      .images {
        height: 150px;
      }
    }

    .content-right {
      .form-content_register {
        width: 100%;
      }

      width: 50%;
    }
  }
`;
