import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    color: ${theme.colors.white[0]};
  }

  body {
    background-color: ${theme.colors.black[0]};
  }
`;

export default GlobalStyle;
