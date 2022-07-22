import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const URL = createHttpLink({
  uri: "https://api.github.com/graphql",
});

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: `Bearer ${process.env.REACT_APP_GITHUB_KEY}`,
  },
}));

const client = new ApolloClient({
  link: authLink.concat(URL),
  cache: new InMemoryCache(),
});

export default client;
