import Link from "next/link";
//Types
import { IEpisode } from "../../types/episode";
//Styles
import styles from "./EpisodeCard.module.scss";
//Helpers
import { processSummary } from "../../utils/helpers";

const EpisodeCard = ({ episode }: { episode: IEpisode }) => {
  const { id, number, season, show } = episode;
  const { image, name, summary } = show;

  //Conditional image render
  const background = `url(${image?.medium})`;

  //Shorten summary length
  const noDetails = <p>No details</p>;
  const shortSummary = summary ? processSummary(summary, 10) : noDetails;

  console.log(episode);

  return (
    <div className={styles.episodecard}>
      <Link href={`/shows/${id}`}>
        <div
          className={styles.episodecard__image}
          style={{ backgroundImage: background }}
        ></div>
        <div className={styles.episodecard__content}>
          <div className={styles.episodecard__details}>
            <p>
              Season: {String(season)} Episode: {String(number)}
            </p>
            <h3>{name}</h3>
          </div>

          <p>{shortSummary}</p>
        </div>
      </Link>
    </div>
  );
};

export default EpisodeCard;
