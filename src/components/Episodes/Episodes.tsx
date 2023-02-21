import { motion } from "framer-motion";
import { ShowsContext } from "@/contexts/ShowsContext";
//Components
import EpisodeCard from "../EpisodeCard/EpisodeCard";
//Styles
import styles from "./Episodes.module.scss";
import { useContext } from "react";

const Episodes = () => {
  const { episodes } = useContext(ShowsContext);
  if (!episodes) {
    return (
      <div className={styles.loading}>
        <h3>Loading ... </h3>
      </div>
    );
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
