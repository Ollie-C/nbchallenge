import { useContext } from "react";
//Context
import { EpisodesContext } from "@/contexts/episodesContext";
//Components
import EpisodeCard from "../EpisodeCard/EpisodeCard";
//Styles
import styles from "./Episodes.module.scss";

const Episodes = () => {
  const { episodes } = useContext(EpisodesContext);
  console.log(episodes);
  if (episodes.length < 0) {
    return <p>Loading ... </p>;
  }
  return (
    <section className={styles.episodes}>
      <h2 className={styles.episodes__header}>Last Added Shows</h2>
      <div className={styles.episodeContainer}>
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </section>
  );
};
export default Episodes;
