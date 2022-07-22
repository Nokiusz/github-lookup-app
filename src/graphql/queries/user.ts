import { gql } from "@apollo/client";

export const getUser = gql`
  query searchedUser($login: String!) {
    user(login: $login) {
      avatarUrl
      login
      name
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
