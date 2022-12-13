import { createGlobalStyle } from "styled-components";

export const AppGlobal = createGlobalStyle`
    :root {
        --headline-color: #222B45;
    }

    body, *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Encode Sans', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        font-style: normal;
    }
`;
