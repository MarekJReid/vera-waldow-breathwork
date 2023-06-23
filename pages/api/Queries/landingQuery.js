import { gql } from "graphql-request";

export const landingQuery = gql`
  query landingPageContentEntryQuery {
    landingPageContent(id: "6k5mntrLpNVvizKbfjtrEL") {
      sys {
        id
      }
      pageTitle
      intro {
        json
      }
      heroMedia {
        title
        height
        width
        url
      }
      pageSectionsCollection {
        items {
          sectionHeading
          sectionText {
            json
          }
          background {
            title
            height
            width
            url
          }
        }
      }
    }
  }
`;
