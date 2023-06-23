import { NextSeo } from "next-seo";
import { Hero } from "../src/Components/Pages/landing-actual/hero/hero";
import { PageContainer } from "../src/Components/StyledComponents/containers.css";
import { landingQuery } from "./api/Queries/landingQuery";
import { graphQLClient, pageQuery } from "./api/api";
import { Section } from "../src/Components/Pages/landing-actual/section-component/section";

export default function Home(props) {
  const { landingData } = props;
  const { landingPageContent } = landingData;
  const { pageTitle, heroMedia, intro, pageSectionsCollection } =
    landingPageContent;
  const width = heroMedia.width;
  console.log("pageSectionsCollection", pageSectionsCollection.items);
  return (
    <PageContainer hero width={width}>
      <NextSeo title={"Home"} />
      {/* <LandingSlider slides={slides}/> */}
      <Hero title={pageTitle} heroMedia={heroMedia} intro={intro} />
      {pageSectionsCollection.items.map((section, index) => (
        <Section
          key={index}
          title={section.sectionHeading}
          heroMedia={section.background}
          intro={section.sectionText}
        />
      ))}
    </PageContainer>
  );
}
export async function getStaticProps() {
  const landingData = await graphQLClient.request(pageQuery(landingQuery));
  return {
    props: { landingData },
  };
}
