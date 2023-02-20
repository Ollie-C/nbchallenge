import Link from "next/link";
import { IShow, IEpisode } from "../../types/episode";
//Styles
import styles from "./EpisodeCard.module.scss";

const EpisodeCard = ({ episode }: { episode: IEpisode }) => {
  const show: IShow = episode.show;

  const noDetails = <p>No details</p>;

  const background = show.image ? `url(${show.image.medium})` : "white";

  //Shorten and remove HTML tags
  const processSummary = (summary: string) => {
    return summary
      .split(" ")
      .slice(0, 10)
      .join(" ")
      .replace(/(<([^>]+)>)/gi, "");
  };

  const summary = show.summary ? processSummary(show.summary) : noDetails;

  return (
    <div className={styles.episodecard}>
      <Link href={`/shows/${show.id}`}>
        <div
          className={styles.episodecard__image}
          style={{ backgroundImage: background }}
        ></div>
        <div className={styles.episodecard__content}>
          <div className={styles.episodecard__details}>
            <p>
              Season: {String(episode.season)} Episode: {String(episode.number)}
            </p>
            <h3>{show.name}</h3>
          </div>

          <p>{summary}</p>
        </div>
      </Link>
    </div>
  );
};

export default EpisodeCard;