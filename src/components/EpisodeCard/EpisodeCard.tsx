import Link from "next/link";
//Types
import { IEpisode } from "../../types/episode";
//Styling
import styles from "./EpisodeCard.module.scss";
import Image from "next/image";
//Helpers
import { processSummary } from "../../utils/helpers";

const EpisodeCard = ({ episode }: { episode: IEpisode }) => {
  const { id, number, season, show } = episode;
  const { image, name, summary, rating } = show;

  //Conditional image render
  const background = `url(${image?.medium})`;

  //Shorten summary length
  const noDetails = <p>No details</p>;
  const shortSummary = summary ? processSummary(summary, 10) : noDetails;
  return (
    <div className={styles.episodecard}>
      <Link href={`/shows/${show.id}`}>
        <div
          className={styles.episodecard__image}
          style={{ backgroundImage: background }}
        ></div>

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
            <p>{shortSummary}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EpisodeCard;
