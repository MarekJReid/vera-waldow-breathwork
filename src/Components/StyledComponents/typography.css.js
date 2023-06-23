import styled, { createGlobalStyle } from "styled-components";

import { color } from "./variables";
import Link from "next/link";

export const Typography = createGlobalStyle`

/* parisienne-regular - latin */
/* parisienne-regular - latin */
@font-face {
  font-family: 'Parisienne';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/parisienne-v13-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/parisienne-v13-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/parisienne-v13-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/parisienne-v13-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/fonts/parisienne-v13-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/parisienne-v13-latin-regular.svg#Parisienne') format('svg'); /* Legacy iOS */
}
/* nunito-200 - latin */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 200;
  src: url('/fonts/nunito-v25-latin-200.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/nunito-v25-latin-200.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/nunito-v25-latin-200.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/nunito-v25-latin-200.woff') format('woff'), /* Modern Browsers */
       url('/fonts/nunito-v25-latin-200.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/nunito-v25-latin-200.svg#Nunito') format('svg'); /* Legacy iOS */
}

/* nunito-300 - latin */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 300;
  src: url('/fonts/nunito-v25-latin-300.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/nunito-v25-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/nunito-v25-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/nunito-v25-latin-300.woff') format('woff'), /* Modern Browsers */
       url('/fonts/nunito-v25-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/nunito-v25-latin-300.svg#Nunito') format('svg'); /* Legacy iOS */
}

/* nunito-regular - latin */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/nunito-v25-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/nunito-v25-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/nunito-v25-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/nunito-v25-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/fonts/nunito-v25-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/nunito-v25-latin-regular.svg#Nunito') format('svg'); /* Legacy iOS */
}

/* nunito-500 - latin */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 500;
  src: url('/fonts/nunito-v25-latin-500.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/nunito-v25-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/nunito-v25-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/nunito-v25-latin-500.woff') format('woff'), /* Modern Browsers */
       url('/fonts/nunito-v25-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/nunito-v25-latin-500.svg#Nunito') format('svg'); /* Legacy iOS */
}

/* nunito-600 - latin */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 600;
  src: url('/fonts/nunito-v25-latin-600.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/nunito-v25-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/nunito-v25-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/nunito-v25-latin-600.woff') format('woff'), /* Modern Browsers */
       url('/fonts/nunito-v25-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/nunito-v25-latin-600.svg#Nunito') format('svg'); /* Legacy iOS */
}

/* nunito-700 - latin */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  src: url('/fonts/nunito-v25-latin-700.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/nunito-v25-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/nunito-v25-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/nunito-v25-latin-700.woff') format('woff'), /* Modern Browsers */
       url('/fonts/nunito-v25-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/nunito-v25-latin-700.svg#Nunito') format('svg'); /* Legacy iOS */
}

/* nunito-800 - latin */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 800;
  src: url('/fonts/nunito-v25-latin-800.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/nunito-v25-latin-800.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/nunito-v25-latin-800.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/nunito-v25-latin-800.woff') format('woff'), /* Modern Browsers */
       url('/fonts/nunito-v25-latin-800.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/nunito-v25-latin-800.svg#Nunito') format('svg'); /* Legacy iOS */
}

/* nunito-900 - latin */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 900;
  src: url('/fonts/nunito-v25-latin-900.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/nunito-v25-latin-900.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/nunito-v25-latin-900.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/nunito-v25-latin-900.woff') format('woff'), /* Modern Browsers */
       url('/fonts/nunito-v25-latin-900.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/nunito-v25-latin-900.svg#Nunito') format('svg'); /* Legacy iOS */
}


body {
  font-family: 'Nunito';
  margin: 0;
  padding: 0;
  
}


 a {
  text-decoration: none;
  transition: border-bottom .2s ease-out;
 }
//  a :after {
//   padding: 0 0 0 2rem;
//   display:block;
//   content: '';
//   border-bottom: solid 3px #DC1E28;  
//   transform: scaleX(0);  
//   transition: transform 250ms ease-in-out;
// }
//  a :hover:after { transform: scaleX(1); } 
//  a.fromRight:after{ transform-origin:100% 50%; }
// a.fromLeft:after{  transform-origin:  0% 50%; }
`;

export const Heading1 = styled.h1`
  font-family: "Parisienne";
  background: none;
  text-align: ${(props) => (props.center ? `center` : `left`)};
  color: ${(props) =>
    props.color === "one"
      ? color.ONE
      : props.color === "six"
      ? color.SIX
      : color.PRIMARY_RED_ROUGE};
  font-size: 4rem;
  font-weight: 500;
  line-height: 36px;
  transition: color 0.2s ease;
  margin-bottom: ${(props) => {
    switch (props.marginBottom) {
      case "xs":
        return ".25rem";
      case "sm":
        return "1rem";
      case "md":
        return "1.75rem";
      case "lg":
        return "3.5rem";
      case "xl":
        return "6rem";
      case "xxl":
        return "11.25rem";
      default:
        return "0";
    }
  }};
  margin-top: ${(props) => {
    switch (props.marginTop) {
      case "xs":
        return ".25rem";
      case "sm":
        return "1rem";
      case "md":
        return "1.75rem";
      case "lg":
        return "3.5rem";
      case "xl":
        return "6rem";
      case "xxl":
        return "11.25rem";
      default:
        return "0";
    }
  }};

  @media (max-width: 450px) {
    font-size: 32px;
    //line-height: 16px;
  }
`;

export const Heading2 = styled.h2`
  font-family: "Parisienne";
  color: ${(props) =>
    props.color === "white"
      ? color.SECONDARY_WHITE
      : props.color === "black"
      ? color.PRIMARY_RICH_BLACK
      : color.PRIMARY_RED_ROUGE};
  font-size: 16px;
  line-height: 22px;
  //font-weight: 500;

  margin-bottom: ${(props) => {
    switch (props.marginBottom) {
      case "xs":
        return ".25rem";
      case "sm":
        return "1rem";
      case "md":
        return "1.75rem";
      case "lg":
        return "3.5rem";
      case "xl":
        return "6rem";
      case "xxl":
        return "11.25rem";
      case "none":
        return "0rem";
      default:
        return "0";
    }
  }};
  margin-top: ${(props) => {
    switch (props.marginTop) {
      case "xs":
        return ".25rem";
      case "sm":
        return "1rem";
      case "md":
        return "1.75rem";
      case "lg":
        return "3.5rem";
      case "xl":
        return "6rem";
      case "xxl":
        return "11.25rem";
      default:
        return "0";
    }
  }};
  @media (max-width: 450px) {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: ${(props) => (props.mbOnMob ? props.mbOnMob : "1rem")};
  }
`;

export const Heading3 = styled.h3`
  font-family: "Parisienne";
  color: ${(props) =>
    props.color === "white"
      ? color.SECONDARY_WHITE
      : props.color === "black"
      ? color.PRIMARY_RICH_BLACK
      : color.PRIMARY_RED_ROUGE};
  font-size: 16px;
  line-height: 22px;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};

  margin-bottom: ${(props) => {
    switch (props.marginBottom) {
      case "xs":
        return ".25rem";
      case "sm":
        return "1rem";
      case "md":
        return "1.75rem";
      case "lg":
        return "3.5rem";
      case "xl":
        return "6rem";
      case "xxl":
        return "11.25rem";
      default:
        return "0";
    }
  }};
  margin-top: ${(props) => {
    switch (props.marginTop) {
      case "xs":
        return ".25rem";
      case "sm":
        return "1rem";
      case "md":
        return "1.75rem";
      case "lg":
        return "3.5rem";
      case "xl":
        return "6rem";
      case "xxl":
        return "11.25rem";
      default:
        return "0";
    }
  }};
  @media (max-width: 450px) {
    font-size: 16px;
    margin-bottom: 1rem;
    line-height: ${(props) => props.lineHeight};
    margin-top: ${(props) => props.marginTop};
  }
`;

export const Heading4 = styled.h4`
  font-family: "Nunito";
  color: ${(props) =>
    props.color === "white"
      ? color.SECONDARY_WHITE
      : props.color === "black"
      ? color.PRIMARY_RICH_BLACK
      : color.PRIMARY_RED_ROUGE};
  font-size: 14px;
  line-height: 18px;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};

  margin-bottom: ${(props) => {
    switch (props.marginBottom) {
      case "xs":
        return ".25rem";
      case "sm":
        return "1rem";
      case "md":
        return "1.75rem";
      case "lg":
        return "3.5rem";
      case "xl":
        return "6rem";
      case "xxl":
        return "11.25rem";
      default:
        return "0";
    }
  }};
  margin-top: ${(props) => {
    switch (props.marginTop) {
      case "xs":
        return ".25rem";
      case "sm":
        return "1rem";
      case "md":
        return "1.75rem";
      case "lg":
        return "3.5rem";
      case "xl":
        return "6rem";
      case "xxl":
        return "11.25rem";
      default:
        return "0";
    }
  }};
`;
export const Heading5 = styled.h5`
  font-family: EnglishEgyptian;
  color: ${(props) =>
    props.color === "white"
      ? color.SECONDARY_WHITE
      : props.color === "black"
      ? color.PRIMARY_RICH_BLACK
      : color.PRIMARY_RED_ROUGE};
  font-size: 14px;
  line-height: 14px;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};

  margin-bottom: ${(props) => {
    switch (props.marginBottom) {
      case "xs":
        return ".25rem";
      case "sm":
        return "1rem";
      case "md":
        return "1.75rem";
      case "lg":
        return "3.5rem";
      case "xl":
        return "6rem";
      case "xxl":
        return "11.25rem";
      default:
        return "0";
    }
  }};
  margin-top: ${(props) => {
    switch (props.marginTop) {
      case "xs":
        return ".25rem";
      case "sm":
        return "1rem";
      case "md":
        return "1.75rem";
      case "lg":
        return "3.5rem";
      case "xl":
        return "6rem";
      case "xxl":
        return "11.25rem";
      default:
        return "0";
    }
  }};
`;

export const BC1 = styled.p`
  text-align: center;
  white-space: pre-wrap;
  text-align: ${(props) => props.left && "left"};
  background: transparent;
  a {
    color: ${(props) =>
      props.color === "one"
        ? color.ONE
        : props.color === "red"
        ? color.PRIMARY_RED_ROUGE
        : props.color === "black"
        ? color.PRIMARY_RICH_BLACK
        : color.PRIMARY_RED_ROUGE};
  }
  font-family: "Nunito";
  color: ${(props) =>
    props.color === "one"
      ? color.ONE
      : props.color === "six"
      ? color.THREE
      : color.PRIMARY_RED_ROUGE};
  font-size: 2rem;
  line-height: ${(props) => (props.lineHeight ? "20px" : "30px")};
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  margin-bottom: ${(props) => {
    switch (props.marginBottom) {
      case "xs":
        return ".25rem";
      case "sm":
        return "1rem";
      case "md":
        return "1.75rem";
      case "lg":
        return "2.75rem";
      case "xl":
        return "6rem";
      case "xxl":
        return "11.25rem";
      case "openingHours":
        return "1.15rem";
      case "contactEmail":
        return "3.5rem";
      default:
        return "0";
    }
  }};
  margin-top: ${(props) => {
    switch (props.marginTop) {
      case "xs":
        return ".25rem";
      case "sm":
        return "1rem";
      case "md":
        return "1.75rem";
      case "lg":
        return "3.5rem";
      case "xl":
        return "6rem";
      case "xxl":
        return "11.25rem";
      default:
        return "0";
    }
  }};
  @media (max-width: 450px) {
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 1rem;
  }
`;

export const BC2 = styled.p`
  background: transparent;
  a {
    color: inherit;
  }
  font-family: "Nunito";
  color: ${(props) =>
    props.color === "one"
      ? color.ONE
      : props.color === "black"
      ? color.PRIMARY_RICH_BLACK
      : color.PRIMARY_RED_ROUGE};
  font-size: 24px;
  line-height: 18px;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  margin-bottom: ${(props) => {
    switch (props.marginBottom) {
      case "xs":
        return ".25rem";
      case "sm":
        return "1rem";
      case "md":
        return "1.75rem";
      case "lg":
        return "3.5rem";
      case "xl":
        return "6rem";
      case "xxl":
        return "11.25rem";
      default:
        return "0";
    }
  }};
  margin-top: ${(props) => {
    switch (props.marginTop) {
      case "xs":
        return ".25rem";
      case "sm":
        return "1rem";
      case "md":
        return "1.75rem";
      case "lg":
        return "3.5rem";
      case "xl":
        return "6rem";
      case "xxl":
        return "11.25rem";
      default:
        return "0";
    }
  }};
  @media (max-width: 450px) {
    font-size: 10px;
    line-height: 12px;
  }
`;

export const BC3 = styled.p`
  font-family: "Nunito";
  color: ${(props) =>
    props.giftOpen ? "white" : props.color ? props.color : "red"};
  text-align: left;
  font-size: 10px;
  line-height: 14px;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  border-bottom: ${(props) => props.underline && ".75px solid black"};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : 0)};
  margin-bottom: ${(props) => {
    switch (props.marginBottom) {
      case "xs":
        return ".25rem";
      case "sm":
        return "1rem";
      case "md":
        return "1.75rem";
      case "lg":
        return "3.5rem";
      case "xl":
        return "6rem";
      case "xxl":
        return "11.25rem";
      default:
        return "0";
    }
  }};
  margin-top: ${(props) => {
    switch (props.marginTop) {
      case "xs":
        return ".25rem";
      case "sm":
        return "1rem";
      case "md":
        return "1.75rem";
      case "lg":
        return "3.5rem";
      case "xl":
        return "6rem";
      case "xxl":
        return "11.25rem";
      default:
        return "0";
    }
  }};

  a {
    color: black;
    border-bottom: 0.75px solid black;
  }
  @media (max-width: 450px) {
    font-size: 8px;
    line-height: 10px;
  }
  :hover {
    cursor: pointer;
  }
`;

export const BC4 = styled.p`
  font-family: PitchRegular;
  color: ${(props) =>
    props.color === "white"
      ? color.SECONDARY_WHITE
      : props.color === "black"
      ? color.PRIMARY_RICH_BLACK
      : color.PRIMARY_RED_ROUGE};
  font-size: 10px;
  line-height: 12px;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  margin-bottom: ${(props) => {
    switch (props.marginBottom) {
      case "xs":
        return ".25rem";
      case "sm":
        return "1rem";
      case "md":
        return "1.75rem";
      case "lg":
        return "3.5rem";
      case "xl":
        return "6rem";
      case "xxl":
        return "11.25rem";
      default:
        return "0";
    }
  }};
  margin-top: ${(props) => {
    switch (props.marginTop) {
      case "xs":
        return ".25rem";
      case "sm":
        return "1rem";
      case "md":
        return "1.75rem";
      case "lg":
        return "3.5rem";
      case "xl":
        return "6rem";
      case "xxl":
        return "11.25rem";
      default:
        return "0";
    }
  }};
`;

export const FBC1 = styled.a`
  font-family: "Nunito";
  color: ${(props) =>
    props.color === "white"
      ? color.SECONDARY_WHITE
      : props.color === "black"
      ? color.PRIMARY_RICH_BLACK
      : color.PRIMARY_RED_ROUGE};
  font-size: 0.75rem;
  line-height: ${(props) => (props.lineHeight ? "21px" : "22px")};
  font-weight: 500;
  margin-bottom: ${(props) => {
    switch (props.marginBottom) {
      case "xs":
        return ".25rem";

      case "sm":
        return "0";
      case "md":
        return "1.75rem";
      case "fmd":
        return "1.rem";
      case "lg":
        return "3.5rem";
      case "xl":
        return "6rem";
      case "xxl":
        return "11.25rem";
      case "lunch":
        return "-.4rem";
      case "address":
        return "-.4rem";
      case "addressLinetwo":
        return ".5rem";
      default:
        return "0";
    }
  }};
  margin-top: ${(props) => {
    switch (props.marginTop) {
      case "xs":
        return ".25rem";
      case "sm":
        return "1rem";
      case "md":
        return "1.75rem";
      case "lg":
        return "3.5rem";
      case "xl":
        return "6rem";
      case "xxl":
        return "11.25rem";
      default:
        return "0";
    }
  }};

  @media (max-width: 450px) {
    font-size: 10px;
    margin-bottom: ${(props) => {
      switch (props.marginBottom) {
        case "xs":
          return ".25rem";
        case "xsf":
          return ".5rem";
        case "sm":
          return "0";
        case "md":
          return "1.75rem";
        case "lg":
          return "3.5rem";
        case "xl":
          return "6rem";
        case "xxl":
          return "11.25rem";
        case "lunch":
          return "-.4rem";
        case "address":
          return "-.4rem";
        case "addressLinetwo":
          return ".5rem";
        default:
          return "1.25rem";
      }
    }};
    line-height: 1.15;
  }
`;
export const FBC1External = styled(FBC1)`
  :hover {
    text-decoration: underline;
  }
`;
export const FBC1First = styled(FBC1)`
  text-decoration: underline;
  text-underline-offset: 3px;
`;
export const BBHeading2 = styled(Heading2)`
  a {
    :hover {
      color: ${color.PRIMARY_RED_ROUGE};
    }
  }
  line-height: 1.5;
  border-bottom: 1.5px solid;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "")};
`;
export const BBHeading3 = styled(Heading3)`
  line-height: 1.5;
  border-bottom: 1.5px solid;
`;
export const NoneDecorationLink = styled(Link)`
  text-decoration: none;
`;
export const RedDecorationLink = styled(Link)`
  text-decoration-color: ${color.PRIMARY_RED_ROUGE};
  text-underline-offset: 5px;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "")};
`;
export const ExtRedDecorationLink = styled.a`
  text-decoration-color: ${color.PRIMARY_RED_ROUGE};
  text-underline-offset: 5px;
`;
export const ExtWhiteDecorationLink = styled.a`
  text-decoration-color: white;
  text-underline-offset: 5px;
`;

export const RenderBC1 = styled(BC1)`
  font-size: 16px;
`;
