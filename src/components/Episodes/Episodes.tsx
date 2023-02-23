import { useState } from "react";
//Components
import EpisodeCard from "../EpisodeCard/EpisodeCard";
import Navigation from "../Pagination/Pagination";
//Styling
import { motion } from "framer-motion";
import styles from "./Episodes.module.scss";
import Image from "next/image";
//Types
import { IEpisode } from "@/types/episode";
//Apollo
import { useQuery } from "@apollo/client";
import { episodesQuery } from "@/lib/queries";

const Episodes = () => {
  //Filter by country
  const [country, setCountry] = useState("GB");
  //Filter by show name match
  const [filter, setFilter] = useState(null);
  //Current page number
  const [page, setPage] = useState(0);

  //Get data
  const {
    data: episodes,
    loading,
    error,
  } = useQuery(episodesQuery, {
    variables: {
      country: country,
      offset: page * 18,
      // limit: page * limit + limit,
      filter: filter,
    },
  });

  if (error) return "Could not find shows.";

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
            onClick={() => setCountry("GB")}
          >
            UK
          </p>
          <p
            className={styles.episodes__country}
            onClick={() => setCountry("US")}
          >
            US
          </p>
          <p
            className={styles.episodes__country}
            onClick={() => setCountry("JP")}
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
          <input type="text" onChange={(e) => setFilter(e.target.value)} />
        </div>
      </div>

      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 1 }}
        className={styles.episodeContainer}
      >
        {loading
          ? "Loading ..."
          : episodes.episodes
              .map((episode: IEpisode) => (
                <EpisodeCard key={episode.id} episode={episode} />
              ))
              .slice(0, 18)}
      </motion.div>
      <Navigation episodes={episodes} page={page} setPage={setPage} />
    </section>
  );
};
export default Episodes;
