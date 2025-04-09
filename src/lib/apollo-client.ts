import {
  ApolloClient,
  InMemoryCache,
  defaultDataIdFromObject,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://nbchallenge.vercel.app/api/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          episodes: {
            // Merge function to avoid duplicate data
            merge(existing = [], incoming) {
              return incoming;
            },
          },
        },
      },
    },
    dataIdFromObject: (object) => {
      // Customize ID generation for better caching
      switch (object.__typename) {
        case 'Episode':
          return `Episode:${object.id}`;
        case 'Show':
          return `Show:${object.id}`;
        default:
          return defaultDataIdFromObject(object);
      }
    },
  }),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      nextFetchPolicy: 'cache-first',
    },
    query: {
      fetchPolicy: 'cache-first',
      errorPolicy: 'all',
    },
  },
  connectToDevTools: process.env.NODE_ENV === 'development',
});

export default client;
