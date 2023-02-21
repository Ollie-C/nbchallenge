import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import { IShowsContext, IEpisode, IShow } from "../types/episode";

export const ShowsContext = createContext<IShowsContext>({
  episodes: [],
  show: undefined,
  getShow: () => {},
});

const ShowsProvider = ({ children }: { children: React.ReactNode }) => {
  //Set global state
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);
  const [show, setShow] = useState<IShow>(null);

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

  //Fetch individual show details
  const getShow = async (id: number) => {
    const query = `query { show(id:${id}) { id name status summary genres network { name } schedule { days } image { original }}}`;
    const { data } = await axios.post("http://localhost:3000/api/graphql", {
      query,
    });
    try {
      const show = data.data.show;
      setShow(show);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ShowsContext.Provider value={{ episodes, show, getShow }}>
      {children}
    </ShowsContext.Provider>
  );
};

export default ShowsProvider;
