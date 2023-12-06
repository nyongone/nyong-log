import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
        width: 100%;
        height: auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    &:link, &:visited {
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }
`;

export { globalStyle as GlobalStyle };
