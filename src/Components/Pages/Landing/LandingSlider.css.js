import styled, { keyframes } from "styled-components";
import { color } from "../../StyledComponents/variables";

export const SliderContainer = styled.div`
  height: 90vh;
  width: 90vw;
  background: ${color.THREE};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LandingSlideContainer = styled.div`
  height: 100%;
  width: 100%;
  background: ${color.TWO};
  position: absolute;
  top: 0;
  left: 0;

  z-index: ${(props) => props.i && props.i + 1};
  display: ${(props) => (props.i === props.activeSlide ? "flex" : "none")};
`;

export const ImageContainer = styled.div`
  background: ${color.FOUR};
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  span {
    height: 50%;
    aspect-ratio: ${(props) => props.aspectRatio && `${props.aspectRatio}`};
  }
`;

export const TextContainer = styled.div`
  position: relative;
  z-index: ${props => props.i && props.i ++};
  background: transparent;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 2rem 6rem;
  
`;
export const TextWrapper = styled.div`

background-color: transparent;
  transition: background-color 0.5s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 2rem;
  :hover {
    background-color: ${color.FIVE};
  }
`;
export const SliderButton = styled.div`
  background-color: transparent !important;
  border-bottom: none;
  transition: border-bottom 0.6s linear;
  :hover {
    border-width: solid 5px #FC5185; 
  }
  margin: 0.5em;
  a {
    color: inherit;
  }



  :after, :before {
  display:block;
  content: '';
  border-bottom: solid 3px ${color.ONE};  
  transform: scaleX(0);  
  transition: transform 250ms ease-in-out;
}
:before{
  position:absolute;
  bottom:1.2em; left:0;
  width:100%;
}
.e:hover:after {
  transition-delay:150ms;
}
  
:hover:after { transform: scaleX(1); transform-origin: 0% 0%;}
`;