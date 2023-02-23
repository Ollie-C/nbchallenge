import { gql } from "@apollo/client";

export const episodesQuery = gql`
  query episodes($country: String, $offset: Int, $filter: String) {
    episodes(country: $country, offset: $offset, filter: $filter) {
      id
      season
      number
      show {
        id
        name
        rating {
          average
        }
        image {
          medium
          original
        }
        summary
      }
    }
  }
`;
