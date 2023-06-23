import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "primary";
  src: local("primary"), url('/fonts/EnglishEgyptianRegular.woff') format("woff");

}
@font-face {
  font-family: "secondary";
  src: local("secondary"), url('/fonts/ElementaRegular.woff') format("woff");
}
* {
  
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  padding: 0;
}



`;
