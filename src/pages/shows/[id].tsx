import { GetServerSideProps } from "next";
import ShowDetails from "@/components/ShowDetails/ShowDetails";
import client from "@/lib/apollo-client";
import { gql } from "@apollo/client";
import RiseLoader from "react-spinners/RiseLoader";

const Show = ({ data, loading }) => {
  if (loading) return <RiseLoader color="#2e2e2e" />;

  return (
    <>
      <ShowDetails show={data.show} cast={data.cast} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  const showsQuery = gql`query { show(id:${id}) { id name status summary genres rating { average } network { name } schedule { days } image { original }} cast(id:${id}) { person { id name image { medium } } character { id name } }}`;

  const { data, loading } = await client.query({
    query: showsQuery,
  });

  return {
    props: {
      loading,

      data,
    },
  };
};
export default Show;
