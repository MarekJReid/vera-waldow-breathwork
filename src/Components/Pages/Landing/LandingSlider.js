import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import LandingSlide from "./LandingSlide";
import gsap from "gsap";
import { SliderContainer } from "./LandingSlider.css";
import { useGesture } from "@use-gesture/react";
const LandingSlider = ({ slides }) => {
  const sliderContainer = useRef();
  const slide = useRef();
  const [activeSlide, setActiveSlide] = useState(0);
  console.log(slide.current);

  const box = useRef();
  const [currentPos, setCurrentPos] = useState(0);
 

  // useEffect(() => {
 
  //   gsap.to(
  //     box.current,
  //     2.5,
  //     {
  //       autoAlpha: 1,
  //     },
  //     { autoAlpha: 0,  }
     
  //   );
  // }, [activeSlide]);

  const bind = useGesture({
    onWheelEnd: ({ movement: [x, y] }) => {
      console.log('x', x)
      nextSlide()
      // if (y < currentPos && activeSlide < slides.length) {
      //   setTimeout(() => {
      //     nextSlide
      //   }, 200);
      // }
      // if ((y > currentPos) & (activeSlide > 0)) nextSlide(activeSlide - 1);
    },
  });


  const nextSlide = () => {
    fadeOut(box.current);
    fadeIn(box.current)
    setTimeout(() => {
      
      if (activeSlide < slides.length - 1) setActiveSlide(activeSlide + 1);
      else setActiveSlide(0);
    }, 1600);
    // setActiveSlide(activeSlide + 1)
  };
  return (
    <div ref={box} {...bind()}>
      <SliderContainer>
       
        {slides.map((slide, i) => (
          <LandingSlide i={i} activeSlide={activeSlide} key={i} slide={slide}>
            {slide.heading}
          </LandingSlide>
        ))}{" "} 
        {/* <button
          onClick={nextSlide}
          style={{ position: `absolute`, top: `0`, zIndex: `1000` }}
        >
          change slide
        </button> */}
      
      </SliderContainer>
      </div>
  );
};

export default LandingSlider;

function fadeOut(target, vars) {
  return gsap.fromTo(target, 1.5, {opacity: 1}, { opacity: 0 });
}
function fadeIn(target, vars) {
  return gsap.fromTo(target, 1.5, {opacity: 0}, { opacity: 1, delay: 1.6 });
}
