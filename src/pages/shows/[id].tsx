import axios from "axios";
import Link from "next/link";
import { IShow } from "@/types/episode";
import { GetServerSideProps } from "next";
import styles from "./show.module.scss";
import Header from "@/components/Header/Header";
//Helpers
import { processSummary } from "../../utils/helpers";

const Show = ({ data }: { data: any }) => {
  const show: IShow = data.data.show;
  console.log(show);
  if (!data || data === null) {
    return <p>Loading . . . </p>;
  }
  return (
    <>
      <Header />
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
            <p>
              Genres: {show.genres.length > 0 && `${show.genres.join(", ")}`}
            </p>
          </div>
          <div className={styles.show__detailcontainer}>
            <h3>Starring</h3>
          </div>
        </div>
        <Link href="/">Back</Link>
      </section>
    </>
  );
};

//Render show data server side
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.query.id;
  const query = `query { show(id:${id}) { id name status summary genres network { name } schedule { days } image { original }}}`;
  const { data } = await axios.post("http://localhost:3000/api/graphql", {
    query,
  });
  return { props: { data } };
};

export default Show;
