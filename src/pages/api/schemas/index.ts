import { createSchema } from "graphql-yoga";
import axios from "axios";

//TV Maze endpoint for episodes showing in the UK, at today's date (default)
const episodesUrl = "https://api.tvmaze.com/schedule?country=";
//TV Maze endpoint for all shows by ID
const showsUrl = "https://api.tvmaze.com/shows";

const schema = createSchema({
  typeDefs: `

  type Query {
    episodes(country: String): [Episode]
    show(id: ID!): Show
    cast(id: ID!): [Cast]
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
  
  type Rating {
    average: Float
  }

  type Cast {
    person: Person
    character: Character
  }

  type Person {
    id: ID!
    name: String
  }

  type Character {
    id: ID!
    name: String
  }


`,
  resolvers: {
    Query: {
      episodes: async (parents, args) => {
        const { data } = await axios.get(`${episodesUrl}${args.country}`);
        return data;
      },
      show: async (parents, args) => {
        const { data } = await axios.get(`${showsUrl}/${args.id}`);
        return data;
      },

      cast: async (parents, args) => {
        const { data } = await axios.get(`${showsUrl}/${args.id}/cast`);
        return data;
      },
    },
  },
});

export default schema;
