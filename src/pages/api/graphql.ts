import { createYoga } from "graphql-yoga";
import schema from "./schemas";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default createYoga({
  schema,
  graphqlEndpoint: "/api/graphql",
});
