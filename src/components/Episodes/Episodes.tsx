import { useContext } from "react";
import { ShowsContext } from "@/contexts/ShowsContext";
//Components
import EpisodeCard from "../EpisodeCard/EpisodeCard";
//Styles
import { motion } from "framer-motion";
import styles from "./Episodes.module.scss";

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
      <div className={styles.intro}>
        <p>
          TV Show and web series database. Create personalised schedules.
          Episode guide, cast, crew and character information.
        </p>
      </div>
      <div className={styles.episodes__header}>
        <h3>Last Added Shows</h3>
        <input type="text" />
      </div>

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
