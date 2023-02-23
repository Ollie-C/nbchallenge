import axios from "axios";
import Link from "next/link";
import { GetServerSideProps } from "next";
import ShowDetails from "@/components/ShowDetails/ShowDetails";
import client from "@/lib/apollo-client";
import { gql } from "@apollo/client";

const Show = ({ show }) => {
  console.log(show);
  return (
    <>
      <p>hi</p>
      <ShowDetails show={show} />
      <Link href="/">Back</Link>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  // const query = `query { show(id:${id}) { id name status summary genres network { name } schedule { days } image { original }}}`;
  // const query = `query { cast(id:${id}) { person { id name } character { id name } }} { show(id:${id}) { id name status summary genres network { name } schedule { days } image { original }} }`;
  // const { data } = await axios.post("http://localhost:3000/api/graphql", {
  //   query,
  // });
  const { data } = await client.query({
    query: gql`query { show(id:${id}) { id name status summary genres network { name } schedule { days } image { original }}}`,
  });

  // const castData = await axios.post("http://localhost:3000/api/graphql", {
  //   castQuery,
  // });
  // const cast = data;
  const show = data.show;
  // const cast = castData.data.data.cast;

  return {
    props: {
      show,
      // cast,
    },
  };
};
export default Show;
