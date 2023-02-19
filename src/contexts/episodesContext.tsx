import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import { IEpisode, EpisodeContextType } from "../types/episode";

export const EpisodesContext = createContext<EpisodeContextType>({
  episodes: [],
});

const EpisodesProvider = ({ children }: { children: React.ReactNode }) => {
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);

  const getEpisodes = async () => {
    const query = `query { episodes { id show { id image { medium } summary }  }}`;
    const { data } = await axios.post("http://localhost:3000/api/graphql", {
      query,
    });

    setEpisodes(data.data.episodes);
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
