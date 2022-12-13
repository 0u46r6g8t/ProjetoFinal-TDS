import styled from "styled-components";

export const FormStyled = styled.div`
  width: 450px;
  height: 250px;

  .data-form {
    justify-content: space-between;
    display: flex;
    flex-direction: column;

    .input-data {
      margin: 10px 0 2px;
    }
  }
  .button-send {
    margin: 30px 0 30px;
  }

  span,
  .paragraph-question {
    margin: 10px 0;
  }

  .terms {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    margin-top: 10px;

    input[type="checkbox"] {
      background: #e4e9f2;
      /* Basic / 500 */

      border: 2px solid #c5cee0;
      border-radius: 3px;
    }

    label {
      margin-left: 10px;
    }

    label a {
      font-size: 13px;
    }
  }
`;
