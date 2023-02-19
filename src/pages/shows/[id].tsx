import axios from "axios";
import Link from "next/link";
import { IShow } from "@/types/episode";
import { GetServerSideProps } from "next";

const Show = ({ data }: { data: any }) => {
  const show: IShow = data.data.show;

  if (!data || data === null) {
    return <p>Loading . . . </p>;
  }
  return (
    <>
      <p>{show.name}</p>
      <Link href="/">Back</Link>
    </>
  );
};

//Render show data server side
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.query.id;
  const query = `query { show(id:${id}) { id name}}`;
  const { data } = await axios.post("http://localhost:3000/api/graphql", {
    query,
  });
  return { props: { data } };
};

export default Show;
