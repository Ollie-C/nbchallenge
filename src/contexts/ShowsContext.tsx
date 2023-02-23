import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import { IShowsContext, IEpisode, IShow } from "../types/episode";

export const ShowsContext = createContext<IShowsContext>({
  episodes: [],
  getEpisodes: () => {},
  currentShow: null,
  randomShow: () => {},
});

const ShowsProvider = ({ children }: { children: React.ReactNode }) => {
  //Set global state
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);
  const [currentShow, setCurrentShow] = useState<IShow>(null);

  //Fetch episodes
  const getEpisodes = async (country: string) => {
    const query = `query { episodes(country:"${country}") { id season number show { id name rating { average } image { medium original } summary }  }}`;
    const { data } = await axios.post("http://localhost:3000/api/graphql", {
      query,
    });
    try {
      const episodes = data.data.episodes;
      setEpisodes(episodes);
    } catch (e) {
      console.error(data.errors[0].message);
    }
  };

  //Create a random banner
  const randomShow = () => {
    const randomIndex = Math.floor(Math.random() * episodes.length);
    setCurrentShow(episodes[randomIndex].show);
  };

  useEffect(() => {
    getEpisodes("GB");
  }, []);

  return (
    <ShowsContext.Provider
      value={{ episodes, getEpisodes, randomShow, currentShow }}
    >
      {children}
    </ShowsContext.Provider>
  );
};

export default ShowsProvider;
