import { createSchema } from "graphql-yoga";
import axios from "axios";

//TV Maze endpoint for episodes showing in the UK, at today's date (default)
const episodesUrl = "https://api.tvmaze.com/schedule?country=";
//TV Maze endpoint for all shows by ID
const showsUrl = "https://api.tvmaze.com/shows";

const schema = createSchema({
  typeDefs: `

  type Query {
    show(id: ID!): Show
    cast(id: ID!): [Cast]
  }

  type Query {
    episodes(country: String, offset: Int, filter: String): [Episode] 
  }
  
  type Episode {
    id: ID!
    season: Int
    number: Int
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
    image: Image
  }

  type Character {
    id: ID!
    name: String
  }


`,
  resolvers: {
    Query: {
      show: async (_parent, args) => {
        const { data } = await axios.get(`${showsUrl}/${args.id}`);
        return data;
      },
      cast: async (_parent, args) => {
        const { data } = await axios.get(`${showsUrl}/${args.id}/cast`);
        return data;
      },
      episodes: async (_parent, args) => {
        const { data } = await axios.get(`${episodesUrl}${args.country}`);
        if (args.filter) {
          return data.filter((episode: any) =>
            episode.show.name.toLowerCase().match(args.filter.toLowerCase())
          );
        }
        return data.slice(args.offset, data.length);
      },
    },
  },
});

export default schema;
