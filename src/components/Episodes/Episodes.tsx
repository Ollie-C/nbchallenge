import { useContext, useState } from "react";
import { ShowsContext } from "@/contexts/ShowsContext";
//Components
import EpisodeCard from "../EpisodeCard/EpisodeCard";
import Navigation from "../Pagination/Pagination";
//Styles
import { motion } from "framer-motion";
import styles from "./Episodes.module.scss";
import { getDisplayedEpisodes } from "@/utils/helpers";

const Episodes = () => {
  const { episodes } = useContext(ShowsContext);

  //Create pagination - 18 episodes per page
  const [currentPage, setCurrentPage] = useState(1);
  const displayedEpisodes = getDisplayedEpisodes(episodes, currentPage);
  const totalPages = Math.ceil(episodes.length / 18);

  //Navigation
  const changePage = (change: any) => {
    if (change === "forward") {
      return setCurrentPage(currentPage + 1);
    }
    if (change === "back") {
      return setCurrentPage(currentPage - 1);
    }
    return setCurrentPage(change);
  };

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
        {displayedEpisodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </motion.div>
      <Navigation
        currentPage={currentPage}
        totalPages={totalPages}
        changePage={changePage}
      />
    </section>
  );
};
export default Episodes;
