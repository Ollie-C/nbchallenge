import Link from "next/link";
import { processSummary } from "../../utils/helpers";
import { useContext } from "react";
import styles from "./Show.module.scss";

import { ShowsContext } from "@/contexts/ShowsContext";
import { useRouter } from "next/router";
const Show = () => {
  const { show } = useContext(ShowsContext);
  const router = useRouter();

  console.log(show);
  console.log(router.query.id);
  if (!show) {
    return <p>Loading . . . </p>;
  }

  return (
    <section className={styles.show}>
      <div className={styles.show__summary}>
        <div
          className={styles.show__image}
          style={{ backgroundImage: `url(${show.image.original})` }}
        ></div>
        <div className={styles.show__description}>
          <h2>{show.name}</h2>
          <p>{processSummary(show.summary, 30)}</p>
        </div>
      </div>
      <div className={styles.show__details}>
        <div className={styles.show__detailcontainer}>
          <h3>Show Info</h3>
          <p>Streamed on: {show.network.name}</p>
          <p>
            Schedule:{" "}
            {show.schedule.days.length > 0 &&
              `${show.schedule.days.join(", ")}`}
          </p>

          <p>Status: {show.status}</p>
          <p>Genres: {show.genres.length > 0 && `${show.genres.join(", ")}`}</p>
        </div>
        <div className={styles.show__detailcontainer}>
          <h3>Starring</h3>
        </div>
      </div>
      <Link href="/">Back</Link>
    </section>
  );
};

export default Show;
