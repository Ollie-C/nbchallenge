import { EpisodesContext } from "@/contexts/episodesContext";
import { useContext } from "react";

const Episodes = () => {
  const { episodes } = useContext(EpisodesContext);
  console.log(episodes);
  return (
    <section className="episodes">
      <p>Hi</p>
    </section>
  );
};
export default Episodes;
