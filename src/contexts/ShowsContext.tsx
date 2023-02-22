import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import { IShowsContext, IEpisode, IShow } from "../types/episode";

export const ShowsContext = createContext<IShowsContext>({
  episodes: [],
  currentShow: null,
  randomShow: () => {},
});

const ShowsProvider = ({ children }: { children: React.ReactNode }) => {
  //Set global state
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);
  const [currentShow, setCurrentShow] = useState<IShow>(null);

  //Fetch episodes
  const getEpisodes = async () => {
    const query = `query { episodes { id season number show { id name rating { average } image { medium original } summary }  }}`;
    const { data } = await axios.post("http://localhost:3000/api/graphql", {
      query,
    });
    const episodes = data.data.episodes;
    setEpisodes(episodes);
  };

  //Create a random banner
  const randomShow = () => {
    const randomIndex = Math.floor(Math.random() * episodes.length);
    setCurrentShow(episodes[randomIndex].show);
  };

  useEffect(() => {
    getEpisodes();
  }, []);

  return (
    <ShowsContext.Provider value={{ episodes, randomShow, currentShow }}>
      {children}
    </ShowsContext.Provider>
  );
};

export default ShowsProvider;
