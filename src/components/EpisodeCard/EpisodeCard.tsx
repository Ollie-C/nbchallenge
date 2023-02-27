import Link from "next/link";
//Types
import { IEpisode } from "../../types/episode";
//Styling
import styles from "./EpisodeCard.module.scss";
//Helpers
import { processSummary } from "../../utils/helpers";
import Image from "next/image";

const EpisodeCard = ({ episode }: { episode: IEpisode }) => {
  const { number, season, show } = episode;
  const { image, name, summary, rating } = show;

  return (
    <div className={styles.episodecard}>
      <Link href={`/shows/${show.id}`}>
        <div className={styles.episodecard__imageContainer}>
          {image ? (
            <div
              className={styles.episodecard__image}
              style={{ backgroundImage: `url(${image?.medium})` }}
            ></div>
          ) : (
            <Image
              src={"/icons/tv.svg"}
              alt={"TV icon"}
              width={10}
              height={10}
              className={styles.episodecard__noImage}
            />
          )}
        </div>

        <div className={styles.episodecard__details}>
          <div className={styles.episodecard__detailsTop}>
            <p>
              S: {String(season)} / Ep.: {String(number)}
            </p>
            {rating.average && (
              <div className={styles.episodecard__rating}>
                <p>{rating.average}</p>
              </div>
            )}
          </div>
          <div>
            <h3>{name}</h3>
            <p>{summary ? processSummary(summary, 13) : "No details"}...</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EpisodeCard;
