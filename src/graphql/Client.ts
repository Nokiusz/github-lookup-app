import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { getCookie } from "typescript-cookie";

const URL = createHttpLink({
  uri: "https://api.github.com/graphql",
});

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: `Bearer ${getCookie("github_token")}`,
  },
}));

const client = new ApolloClient({
  link: authLink.concat(URL),
  cache: new InMemoryCache(),
});

export default client;
