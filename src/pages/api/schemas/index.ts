import { createSchema } from "graphql-yoga";
import axios from "axios";

//TV Maze endpoint for episodes showing in the UK, at today's date (default)
const episodesUrl = "https://api.tvmaze.com/schedule?country=GB";
//TV Maze endpoint for all shows by ID
const showsUrl = "https://api.tvmaze.com/shows";

const schema = createSchema({
  typeDefs: `

  type Query {
    episodes: [Episode]
    show(id: ID!): Show
  }

  type Episode {
    id: ID!
    image: String 
    season: Int
    number: Int
    rating: String
    airdate: String!
    airtime: String!
    summary: String
    show: Show!
  }

  type Show {
    id: ID!
    name: String
    genres: String
    status: String
    summary: String
    image: Image
  }

  type Image {
    medium: String
  }

`,
  resolvers: {
    Query: {
      episodes: async () => {
        const { data } = await axios.get(`${episodesUrl}`);
        return data;
      },
      show: async (parents, args) => {
        const { data } = await axios.get(`${showsUrl}/${args.id}`);
        return data;
      },
    },
  },
});

export default schema;
