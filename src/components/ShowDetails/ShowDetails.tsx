import styles from "./ShowDetails.module.scss";
import { processSummary } from "../../utils/helpers";
import Cast from "../Cast/Cast";

export const ShowInfo = ({ info }) => {
  const noDetails = "-";
  return (
    <div className={styles.show__infoContainer}>
      <p>{info[0]}</p>
      <b>{info[1] ? info[1] : noDetails}</b>
    </div>
  );
};

const ShowDetails = ({ show }) => {
  const { genres, network, schedule, status, image, name, summary, rating } =
    show;

  const showInfo = [
    ["Streamed on:", network],
    ["Schedule:", schedule.days.join(", ")],
    ["Status:", status],
    ["Genres:", genres.join(", ")],
  ];

  // const cast = [];

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
          {showInfo &&
            showInfo.map((info) => <ShowInfo key={info[0]} info={info} />)}
        </div>
        <div className={styles.show__info}>
          <h3>Starring</h3>
          {/* {cast && cast.map((person) => <Cast />)} */}
        </div>
      </div>
    </section>
  );
};

export default ShowDetails;
