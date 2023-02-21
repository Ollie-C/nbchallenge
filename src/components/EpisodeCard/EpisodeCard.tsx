import Link from "next/link";
import { IShow, IEpisode } from "../../types/episode";
//Styles
import styles from "./EpisodeCard.module.scss";
//Helpers
import { processSummary } from "../../utils/helpers";
import { useContext } from "react";
import { ShowsContext } from "@/contexts/ShowsContext";

const EpisodeCard = ({ episode }: { episode: IEpisode }) => {
  const { getShow } = useContext(ShowsContext);
  const show: IShow = episode.show;

  const noDetails = <p>No details</p>;

  const background = show.image ? `url(${show.image.medium})` : "white";

  const summary = show.summary ? processSummary(show.summary, 10) : noDetails;

  return (
    <div className={styles.episodecard}>
      <Link href={`/shows/${show.id}`} onClick={() => getShow(show.id)}>
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
