import React from "react";
import { PageWrapper } from "../../../StyledComponents/containers.css";
import LandingRenderer from "../../../Common/RichTextRenderers/LandingRenderer";
// import { useAutoAnimate } from "@formkit/auto-animate/react";
type Props = {
  title: string;
  intro: {
    json: any;
  };
  heroMedia: {
    url: string;
  };
  bg: string;
};

export const Section = (props: Props) => {
  console.log("props", props);
  //   const [parent, enableAnimations] = useAutoAnimate(/* optional config */);

  return (
    // <PageWrapper bg={props.heroMedia.url} hero ref={parent}>
    <PageWrapper bg={props.heroMedia.url}>
      <h1 style={{ textAlign: "center" }}>{props.title}</h1>
      <LandingRenderer node={props.intro.json} />
    </PageWrapper>
  );
};
