import { gql } from "@apollo/client";

export const getUser = gql`
  query getUser($login: String!) {
    user(login: $login) {
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
