import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body
{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: "Yanone Kaffeesatz", sans-serif;
}

html {
    scroll-behavior: smooth;
}
`;

export default GlobalStyles;
