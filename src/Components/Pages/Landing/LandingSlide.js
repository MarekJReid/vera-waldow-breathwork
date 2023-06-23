import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
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

import { LandingText } from "./LandingText";
const LandingSlide = ({ i, activeSlide, slide }) => {
  const slideRef = useRef();

  console.log("slideRef.innerRef", slideRef);
  return (
    <LandingSlideContainer
      i={i}
      activeSlide={activeSlide}
      key={i}
      slide={slide}
    >
      <ImageContainer
        aspectRatio={slide.image.width / slide.image.height}
        i={i}
      >
        <Image src={slide.image.url} layout="fill" />
      </ImageContainer>

      <LandingText ref={slideRef} slide={slide} />
    </LandingSlideContainer>
  );
};

export default LandingSlide;

function fadeOut(target, vars) {
  return gsap.fromTo(target, 1.5, { opacity: 1 }, { opacity: 0 });
}
function fadeIn(target, duration, delay) {
  return gsap.fromTo(
    target,
    duration,
    { opacity: 0, y: -25 },
    { opacity: 1, y: 0, delay: delay }
  );
}
