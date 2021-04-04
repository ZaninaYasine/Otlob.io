import ApolloClient, { InMemoryCache } from "apollo-boost";

export const cache = new InMemoryCache({ addTypename: false });

const client = new ApolloClient({
  cache: cache,
  clientState: {
    defaults: {
      language: "EN",
      user: {
        userInfo: {
          __typename: "UserInfoPayload",
          fullname: null,
          address: null,
        },
        __typename: "UserPayload",
      },
      cart: {},
      categories: [],
    },
  },
  uri: undefined,
});

export default client;
