import styles from "./ShowDetails.module.scss";
import { processSummary } from "../../utils/helpers";
import Cast from "./CastList";

export const ShowInfo = ({ info }) => {
  const noDetails = "-";
  return (
    <div className={styles.show__infoContainer}>
      <p>{info[0]}</p>
      <b>{info[1] ? info[1] : noDetails}</b>
    </div>
  );
};

const ShowDetails = ({ show, cast }) => {
  const {
    genres,
    network,
    schedule,
    status,
    image,
    name: showName,
    summary,
    rating,
  } = show;
  const showInfo = [
    ["Streamed on:", network?.name],
    ["Schedule:", schedule.days.join(", ")],
    ["Status:", status],
    ["Genres:", genres.join(", ")],
  ];

  //Get only first 5 cast members
  const filteredCast = cast.slice(0, 5);

  return (
    <section className={styles.show}>
      {/* Top */}
      <div className={styles.show__summary}>
        <div
          className={styles.show__image}
          style={{ backgroundImage: `url(${image?.original})` }}
        ></div>
        <div className={styles.show__description}>
          <p>{rating ? rating.average : "-"}/10</p>
          <h2>{showName}</h2>
          <p>{summary ? processSummary(summary, 30) : "No show details"}</p>
        </div>
      </div>
      {/* Bottom */}
      <div className={styles.show__details}>
        {/* Show Info */}
        <div className={styles.show__info}>
          <h3>Show Info</h3>
          {showInfo &&
            showInfo.map((info) => <ShowInfo key={info[0]} info={info} />)}
        </div>
        {/* Starring */}
        <div className={styles.show__info}>
          <h3>Starring</h3>
          {filteredCast.length < 1 && <p>No cast details.</p>}
          {filteredCast.map((member: any) => (
            <Cast castMember={member} key={member.person.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowDetails;
