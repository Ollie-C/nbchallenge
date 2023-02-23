import Link from "next/link";
import { GetServerSideProps } from "next";
import ShowDetails from "@/components/ShowDetails/ShowDetails";
import client from "@/lib/apollo-client";
import { gql } from "@apollo/client";

const Show = ({ data }) => {
  console.log(data);
  return (
    <>
      <ShowDetails show={data.show} cast={data.cast} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  const showsQuery = gql`query { show(id:${id}) { id name status summary genres network { name } schedule { days } image { original }} cast(id:${id}) { person { id name image { medium } } character { id name } }}`;

  const { data } = await client.query({
    query: showsQuery,
  });

  return {
    props: {
      data,
    },
  };
};
export default Show;
