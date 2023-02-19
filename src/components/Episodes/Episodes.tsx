import { useContext } from "react";
//Context
import { EpisodesContext } from "@/contexts/episodesContext";
//Components
import EpisodeCard from "../EpisodeCard/EpisodeCard";
//Styles
import styles from "./Episodes.module.scss";

const Episodes = () => {
  const { episodes } = useContext(EpisodesContext);

  return (
    <section className={styles.episodes}>
      {episodes.map((episode) => (
        <EpisodeCard key={episode.id} episode={episode.show} />
      ))}
    </section>
  );
};
export default Episodes;
