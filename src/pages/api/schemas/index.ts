import { createSchema } from "graphql-yoga";
import axios from "axios";

//TV Maze endpoint for episodes showing in the UK, at today's date (default)
const episodesUrl = "https://api.tvmaze.com/schedule?country=";
//TV Maze endpoint for all shows by ID
const showsUrl = "https://api.tvmaze.com/shows";

const schema = createSchema({
  typeDefs: `

  type Query {
    episodes(name: String): [Episode]
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
    status: String
    summary: String
    schedule: Schedule
    network: Network
    rating: Rating
    genres: [String]
    image: Image
  }

  type Image {
    medium: String
    original: String
  }

  type Schedule {
    days: [String]
  }

  type Network {
    name: String
  }

  type Cast {
    id: ID!
    name: String
    character: Character
  }

  type Character {
    name: String
  }

  type Rating {
    average: Float
  }

`,
  resolvers: {
    Query: {
      episodes: async (parents, args) => {
        const { data } = await axios.get(`${episodesUrl}${args.name}`);
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
