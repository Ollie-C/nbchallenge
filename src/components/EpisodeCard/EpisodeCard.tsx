import Link from "next/link";
//Types
import { IEpisode } from "../../types/episode";
//Styles
import styles from "./EpisodeCard.module.scss";
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
  console.log(id);
  return (
    <div className={styles.episodecard}>
      <Link href={`/shows/${show.id}`}>
        <div
          className={styles.episodecard__image}
          style={{ backgroundImage: background }}
        ></div>

        <div className={styles.episodecard__details}>
          <p>
            Season: {String(season)} Episode: {String(number)} Rating:{" "}
            {rating.average ? rating.average : "-"}
          </p>

          <h3>{name}</h3>
          <p>{shortSummary}</p>
        </div>
      </Link>
    </div>
  );
};

export default EpisodeCard;
