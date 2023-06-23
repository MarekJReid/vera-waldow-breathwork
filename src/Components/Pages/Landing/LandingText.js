import React, {useEffect} from "react";
import gsap from "gsap";
import {
    ImageContainer,
    LandingSlideContainer,
    SliderButton,
    TextContainer,
    TextWrapper,
  } from "./LandingSlider.css";
  import { BC1, BC2, Heading1 } from "../../StyledComponents/typography.css";
  import LandingRenderer from "../../Common/RichTextRenderers/LandingRenderer";
  import Link from "next/link";
export const LandingText = React.forwardRef((props, ref,) => {
    useEffect(() => {
 fadeIn(ref.current.children[0], 1, 2)
 fadeIn(ref.current.children[1], 1, 2.5)
 fadeIn(ref.current.children[2], 1, 2.75)
  
    });
    return ( 
 
    <TextContainer i={props.i} >
      <TextWrapper ref={ref}>
     
          <Heading1 color="six" marginBottom="sm">
            {props.slide.heading}
          </Heading1>

          <LandingRenderer node={props.slide.textLong.json} />
          <SliderButton>
            <Link href={props.slide.linkHref}>
              <a>
                <BC2 color="one">{props.slide.linkText}</BC2>
              </a>
            </Link>
          </SliderButton>
       
      </TextWrapper>
    </TextContainer>

 
)});

function fadeOut(target, vars) {
    return gsap.fromTo(target, 1.5, {opacity: 1}, { opacity: 0 });
  }
  function fadeIn(target, duration, delay) {
    return gsap.fromTo(target, duration, {opacity: 0, y: -25}, { opacity: 1, y: 0, delay: delay });
  }