import styled, { keyframes } from "styled-components";
import { color } from "./variables";
import { useRouter } from "next/router";
const fadeIn = keyframes`
  from {
    visibility: hidden;
    opacity: 0;
  }

  to {
   visibility: visible;
    opacity: 1;
  }
`;

export const PageContainer = styled.div`
  flex-direction: column;
  width: 100%;

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  padding: ${(props) => (props.hero ? "0 0 7.5rem 0" : "7.5rem 0")};
  width: 100%;
  min-height: ${(props) => (props.hero ? "100vh" : "auto")};
  /* min-height: 100vh; */
  // mobile media query
  @media (max-width: 450px) {
    min-height: 100vh;
`;

export const LeftPageContainer = styled.div`
  text-align: center;
  height: ${(props) => props.pageHeight && `${props.pageHeight}px`};
  width: 46.5%;
  margin-left: 2.5%;
  margin-top: ${(props) => props.marginTop && `${props.marginTop}px`};
  padding-bottom: ${({ i, last }) => (i === last ? "5rem" : "")};
  display: flex;
  justify-content: ${(props) => props.center && "center"};
  align-items: center;
  flex-direction: column;
  animation: ${fadeIn} 1s linear;
`;

export const LeftSectionWrapper = styled.div`
  width: ${(props) => (props.brunch ? `70%` : props.full ? `100%` : `77%`)};
  padding: ${(props) => (props.image ? `0` : `3.5rem 2.75rem`)};

  ${(props) => (props.white ? `` : `#FBF9F7`)};
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: ${(props) => (props.brunch ? `12px solid #F3735A` : ``)};
  margin: ${(props) =>
    props.first
      ? "3.5rem 0"
      : props.brunch
      ? `3.5rem 12px 3.5rem 0`
      : props.image
      ? `0`
      : "3.5rem 0"};
`;

export const FormWrapper = styled.div`
  margin: 1.75rem 0;
`;
export const RichtTextContainer = styled.div`
  width: 80%;
  background: transparent;

  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin: ${(props) =>
    props.origin === "menuIntro" ? `1.75rem  1.5rem 0` : `1.75rem 0`};
`;
export const MiddleContainer = styled.div`
  padding: 8% 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  align-items: center;
  overflow: hidden;
  width: 100%;
  flex-direction: column;
`;

export const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  width: ${(props) =>
    props.full
      ? "100%"
      : props.half
      ? "50%"
      : props.width
      ? props.width
      : "70%"};
  text-align: ${(props) => (props.centered ? "center" : "left")};
  background-color: ${(props) =>
    props.red ? color.PRIMARY_RED_WINE : color.SECONDARY_WHITE};
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
        return "7rem";
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
  overflow: hidden;
  @media (max-width: 450px) {
    width: 90%;
    background: none;
    margin-bottom: ${(props) => (props.mbOnMob ? props.mbOnMob : "3.5rem")};
    flex-direction: column;
    margin-top: 0;
    display: ${(props) => (props.hiddenOnMob ? "none" : "block")};
  }
`;
export const SectionWrapper = styled.div`
  width: ${(props) => (props.width ? props.width : "70%")};
  align-self: flex-end;
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
    width: 100%;
    padding: 0;
    margin-top: 0;
  }
`;

export const MenuContainer = styled.div`
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  position: -webkit-sticky;
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100vh;
  width: 100%;
  transform: translateX(${(props) => (props.menuOpen ? "unset" : "-100%")});
  transition: all 1s ease-in-out;
  /* transition-delay: 500ms; */
  background-color: ${(props) =>
    props.giftOpen ? color.PRIMARY_RED_WINE : color.CREME};
  z-index: 5;
  @media (max-width: 450px) {
    // display: none;
  }
`;
export const GiftVouchersContainer = styled.div`
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  position: -webkit-sticky;
  position: fixed;
  height: 100vh;
  width: 100%;
  transform: translateX(${(props) => (props.giftOpen ? "unset" : "100%")});
  // display: ${(props) => (props.giftOpen ? "block" : "none")};
  transition: transform 1s ease-in-out;
  background-color: ${color.PRIMARY_RED_WINE};
  z-index: 10;
  @media (max-width: 450px) {
    // display: none;
  }
`;

export const DesktopContainer = styled.div`
  width: 100%;
  height: 100%;
  @media (max-width: 450px) {
    display: none;
  }
`;

export const MobileContainer = styled.div`
  width: 100%;
  height: 100%;
  @media (min-width: 450px) {
    display: none;
  }
`;

export const Grid = styled.div`
  width: ${(props) => (props.full ? "100%" : "74.5%")};
  align-self: flex-end;
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.cols}, 1fr)`};
  grid-gap: ${(props) =>
    props.insta ? props.insta : props.gridGap ? props.gridGap : "3.75rem 1rem"};

  align-items: center;
  align-items: start;
  @media (max-width: 451px) {
    grid-template-columns: ${(props) => `repeat(${props.colsMob}, 1fr)`};
    grid-gap: 2rem 0rem;
  }
`;

export const Item = styled.div`
  display: block;
  transition: opacity 0.2s ease-out;
`;

export const ItemImgLink = styled.a`
  text-decoration: none;

  color: #333333;
  &:hover {
    opacity: ${(props) => (props.link ? 0.5 : 1)};
  }
`;
export const ItemImg = styled.div`
  min-height: 250px;
  min-width: 150px;
  background-image: ${(props) => `url('${props.src}')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 2.25 rem;
  transition: opacity 0.2s ease-out;
  &:hover {
    opacity: 0.25;
  }
`;

export const FullImageContainer = styled.div`
  display: inline;
  width: 100%;
`;

export const Button = styled.div`
  align-self: center;
  padding: 0.5rem 1rem;
  background: #b44a40;
  color: white;
  width: ${(props) => props.width && `${props.width}`};
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
    color: white;
  }
  transition: all 0.25s ease;
  :hover {
    cursor: pointer;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  border: 10px solid green;
`;
