import { useState, useCallback, useMemo } from 'react';
//Components
import EpisodeCard from '../EpisodeCard/EpisodeCard';
import Navigation from '../Pagination/Pagination';
//Styling
import { motion } from 'framer-motion';
import styles from './Episodes.module.scss';
import Image from 'next/image';
import RiseLoader from 'react-spinners/RiseLoader';
//Types
import { IEpisode } from '@/types/episode';
//Apollo
import { useQuery } from '@apollo/client';
import { episodesQuery } from '@/lib/queries';

const Episodes = () => {
  //Filter by country
  const [country, setCountry] = useState<string>('GB');
  const countries = ['GB', 'US', 'JP'];
  //Filter by show name match
  const [filter, setFilter] = useState<string | null>(null);
  //Current page number
  const [page, setPage] = useState<number>(0);

  // Debounced search handling
  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const timeoutId = setTimeout(() => {
        setFilter(value);
        // Reset page on new search
        setPage(0);
      }, 300);

      return () => clearTimeout(timeoutId);
    },
    []
  );

  //Get data
  const {
    data: episodes,
    loading,
    error,
  } = useQuery(episodesQuery, {
    variables: {
      country: country,
      offset: page * 18,
      filter: filter,
    },
  });

  const displayedEpisodes = useMemo(() => {
    if (!episodes?.episodes?.length) return [];
    return episodes.episodes.slice(0, 18);
  }, [episodes]);

  if (error) return <p>Could not find shows.</p>;

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

        <div className={styles.episodes__options}>
          <div className={styles.episodes__countries}>
            {countries &&
              countries.map((countryCode, index) => (
                <p
                  key={index}
                  className={`${styles.episodes__country} ${
                    countryCode === country
                      ? styles.episodes__country_active
                      : ''
                  }`}
                  onClick={() => setCountry(countryCode)}>
                  {countryCode}
                </p>
              ))}
          </div>
          <div className={styles.episodes__search}>
            <Image
              src='/icons/searchicon.svg'
              alt='search icon'
              width={16}
              height={16}
              className={styles.episodes__icon}
            />
            <input
              type='text'
              placeholder='Search shows...'
              onChange={handleSearchChange}
              aria-label='Search shows'
            />
          </div>
        </div>
      </div>

      {loading ? (
        <div className={styles.loading}>
          <RiseLoader color='#2e2e2e' />
        </div>
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 50,
              damping: 20,
              staggerChildren: 0.1,
            }}
            className={styles.episodeContainer}
            style={{ width: '100%' }}>
            {displayedEpisodes.length > 0 ? (
              displayedEpisodes.map((episode: IEpisode, index: number) => (
                <motion.div
                  key={episode.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}>
                  <EpisodeCard episode={episode} />
                </motion.div>
              ))
            ) : (
              <p className={styles.no_results}>
                No shows found matching your search.
              </p>
            )}
          </motion.div>
          <Navigation episodes={episodes} page={page} setPage={setPage} />
        </>
      )}
    </section>
  );
};
export default Episodes;
