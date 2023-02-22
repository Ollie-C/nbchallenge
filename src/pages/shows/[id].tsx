import axios from "axios";
import Link from "next/link";
import { GetServerSideProps } from "next";
import ShowDetails from "@/components/ShowDetails/ShowDetails";

const Show = ({ show }) => {
  return (
    <>
      <p>hi</p>
      <ShowDetails show={show} />
      <Link href="/">Back</Link>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  console.log(ctx);
  const { id } = ctx.query;
  const query = `query { show(id:${id}) { id name status summary genres network { name } schedule { days } image { original }}}`;
  const { data } = await axios.post("http://localhost:3000/api/graphql", {
    query,
  });
  const show = data.data.show;
  return {
    props: {
      show,
    },
  };
};
export default Show;
