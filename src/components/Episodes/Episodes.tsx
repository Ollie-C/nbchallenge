import { useContext } from "react";
import { motion } from "framer-motion";
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
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 1 }}
        className={styles.episodeContainer}
      >
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </motion.div>
    </section>
  );
};
export default Episodes;
