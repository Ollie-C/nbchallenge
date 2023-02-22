import styles from "./ShowDetails.module.scss";
import { processSummary } from "../../utils/helpers";
import Cast from "../Cast/Cast";

const ShowDetails = ({ show }) => {
  const { genres, network, schedule, status, image, name, summary } = show;
  return (
    <section className={styles.show}>
      <div className={styles.show__summary}>
        <div
          className={styles.show__image}
          style={{ backgroundImage: `url(${image?.original})` }}
        ></div>
        <div className={styles.show__description}>
          <h2>{name}</h2>
          <p>{processSummary(summary, 30)}</p>
        </div>
      </div>
      <div className={styles.details}>
        <div>
          <h3>Show Info</h3>
          <p>Streamed on: {network.name}</p>
          <p>
            Schedule:{" "}
            {schedule.days.length > 0 && `${schedule.days.join(", ")}`}
          </p>

          <p>Status: {status}</p>
          <p>Genres: {genres.length > 0 && `${genres.join(", ")}`}</p>
        </div>
        <div>
          <Cast />
        </div>
      </div>
    </section>
  );
};

export default ShowDetails;
