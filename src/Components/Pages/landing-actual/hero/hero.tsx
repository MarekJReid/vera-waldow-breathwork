import React from "react";
import { PageWrapper } from "../../../StyledComponents/containers.css";
import LandingRenderer from "../../../Common/RichTextRenderers/LandingRenderer";

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

export const Hero = (props: Props) => {
  console.log("props.heroMedia.url", props.heroMedia.url);
  return (
    <PageWrapper bg={props.heroMedia.url} hero>
      <h1 style={{ textAlign: "center" }}>{props.title}</h1>
      <LandingRenderer node={props.intro.json} />
    </PageWrapper>
  );
};
