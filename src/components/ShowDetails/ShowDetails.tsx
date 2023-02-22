import styles from "./ShowDetails.module.scss";
import { processSummary } from "../../utils/helpers";
import Cast from "../Cast/Cast";

const ShowDetails = ({ show }) => {
  console.log(show);
  const { genres, network, schedule, status, image, name, summary, rating } =
    show;
  console.log(image.original);
  return (
    <section className={styles.show}>
      <div className={styles.show__summary}>
        <div
          className={styles.show__image}
          style={{ backgroundImage: `url(${image?.original})` }}
        ></div>
        <div className={styles.show__description}>
          <p>{rating ? rating.average : "-"}/10</p>
          <h2>{name}</h2>
          <p>{summary ? processSummary(summary, 30) : "No show details"}</p>
        </div>
      </div>
      <div className={styles.show__details}>
        <div className={styles.show__info}>
          <h3>Show Info</h3>
          <p>
            Streamed on: <b>{network?.name}</b>
          </p>
          <p>
            Schedule:{" "}
            <b>{schedule.days.length > 0 && `${schedule.days.join(", ")}`}</b>
          </p>

          <p>
            Status: <b>{status}</b>
          </p>
          <p>Genres: {genres.length > 0 && `${genres.join(", ")}`}</p>
        </div>
        <div className={styles.show__cast}>
          <Cast />
        </div>
      </div>
    </section>
  );
};

export default ShowDetails;
