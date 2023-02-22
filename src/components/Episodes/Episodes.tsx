import { useContext, useState, useEffect } from "react";
import { ShowsContext } from "@/contexts/ShowsContext";
//Components
import EpisodeCard from "../EpisodeCard/EpisodeCard";
import Navigation from "../Pagination/Pagination";
//Styling
import { motion } from "framer-motion";
import styles from "./Episodes.module.scss";
import Image from "next/image";
//Helpers
import { getDisplayedEpisodes } from "@/utils/helpers";

const Episodes = () => {
  const { episodes, getEpisodes } = useContext(ShowsContext);
  const [filteredEpisodes, setFilteredEpisodes] = useState([]);

  //Create pagination - 18 episodes per page
  const [currentPage, setCurrentPage] = useState(1);
  const displayedEpisodes = getDisplayedEpisodes(filteredEpisodes, currentPage);
  const totalPages = Math.ceil(filteredEpisodes.length / 18);

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

  //Filter search
  const handleChange = (e: any) => {
    e.preventDefault();
    const { value } = e.target;
    setFilteredEpisodes(
      episodes.filter((episode) => episode.show.name.toLowerCase().match(value))
    );
  };

  useEffect(() => {
    if (episodes.length > 0) {
      setFilteredEpisodes(episodes);
    }
  }, [episodes]);

  if (!episodes) {
    return (
      <div className={styles.loading}>
        <h3>No results found ... </h3>
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
        <div className={styles.episodes__countries}>
          <h3>Last Added Shows</h3>
          <p
            className={styles.episodes__country}
            onClick={() => getEpisodes("GB")}
          >
            UK
          </p>
          <p
            className={styles.episodes__country}
            onClick={() => getEpisodes("US")}
          >
            US
          </p>
          <p
            className={styles.episodes__country}
            onClick={() => getEpisodes("JP")}
          >
            JAPAN
          </p>
        </div>
        <div className={styles.episodes__search}>
          <Image
            src="/icons/searchicon.svg"
            alt="search icon"
            width="16"
            height="16"
            className={styles.episodes__icon}
          />
          <input type="text" onChange={(e) => handleChange(e)} />
        </div>
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
