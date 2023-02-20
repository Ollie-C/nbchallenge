import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import { IEpisode, EpisodeContextType, IShow } from "../types/episode";

export const EpisodesContext = createContext<EpisodeContextType>({
  episodes: [],
});

const EpisodesProvider = ({ children }: { children: React.ReactNode }) => {
  //Set global state
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);

  //Fetch episodes
  const getEpisodes = async () => {
    const query = `query { episodes { id season number show { id name image { medium } summary }  }}`;
    const { data } = await axios.post("http://localhost:3000/api/graphql", {
      query,
    });
    const episodes = data.data.episodes;
    setEpisodes(episodes);
  };

  useEffect(() => {
    getEpisodes();
  }, []);

  return (
    <EpisodesContext.Provider value={{ episodes }}>
      {children}
    </EpisodesContext.Provider>
  );
};

export default EpisodesProvider;
