import Link from 'next/link';
//Types
import { IEpisode } from '../../types/episode';
//Styling
import styles from './EpisodeCard.module.scss';
//Helpers
import { processSummary, getSecureImageUrl } from '../../utils/helpers';
import Image from 'next/image';

const EpisodeCard = ({ episode }: { episode: IEpisode }) => {
  const { number, season, show } = episode;
  const { image, name, summary, rating } = show;
  const imageUrl = image ? getSecureImageUrl(image.medium) : null;

  return (
    <div className={styles.episodecard}>
      <Link
        href={`/shows/${show.id}`}
        style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div className={styles.episodecard__imageContainer}>
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={name}
              width={210}
              height={295}
              className={styles.episodecard__image}
              style={{ objectFit: 'cover' }}
              sizes='(max-width: 480px) 100vw, (max-width: 768px) 50vw, 210px'
              loading='lazy'
            />
          ) : (
            <div className={styles.episodecard__noImageContainer}>
              <Image
                src={'/icons/tv.svg'}
                alt={'TV icon'}
                width={50}
                height={50}
                className={styles.episodecard__noImage}
              />
            </div>
          )}
        </div>

        <div className={styles.episodecard__details}>
          <div className={styles.episodecard__detailsTop}>
            <p>
              S: {String(season)} / Ep.: {String(number)}
            </p>
            {rating.average && (
              <div className={styles.episodecard__rating}>
                <Image
                  src='/icons/star.svg'
                  alt='rating'
                  width={16}
                  height={16}
                  className={styles.episodecard__star}
                />
                <p>{rating.average}</p>
              </div>
            )}
          </div>
          <div>
            <h3>{name}</h3>
            <p>{summary ? processSummary(summary, 13) : 'No details'}...</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EpisodeCard;
