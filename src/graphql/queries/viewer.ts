import { gql } from "@apollo/client";

export const getAuthUser = gql`
  query viewer {
    viewer {
      avatarUrl
      login
      name
      bio
      company
      location
      createdAt
      followers {
        totalCount
      }
      following {
        totalCount
      }
      repositories {
        totalCount
      }
    }
  }
`;
