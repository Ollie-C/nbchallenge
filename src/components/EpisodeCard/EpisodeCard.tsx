import Link from "next/link";
import { IShow } from "../../types/episode";
//Styles
import styles from "./EpisodeCard.module.scss";

const EpisodeCard = ({ episode }: { episode: IShow }) => {
  if (!episode) {
    return <p>Loading . . . </p>;
  }

  const noDetails = <p>No details</p>;

  const background = episode.image ? `url(${episode.image.medium})` : "white";

  //Shorten and remove HTML tags
  const processSummary = (summary: string) => {
    return summary
      .split(" ")
      .slice(0, 10)
      .join(" ")
      .replace(/(<([^>]+)>)/gi, "");
  };

  const summary = episode.summary ? processSummary(episode.summary) : noDetails;

  return (
    <div className={styles.episodecard}>
      <Link href={`/shows/${episode.id}`}>
        <div
          className={styles.episodecard__image}
          style={{ backgroundImage: background }}
        ></div>
        <div className={styles.episodecard__details}>
          <h3>{episode.name}</h3>
          <p>{summary}</p>
        </div>
      </Link>
    </div>
  );
};

export default EpisodeCard;
