import { IEpisode } from "@/types/episode";

//Function to remove HTML tags and reduce length
export const processSummary = (summary: string, length: number) => {
  return summary
    .split(" ")
    .slice(0, length)
    .join(" ")
    .replace(/(<([^>]+)>)/gi, "");
};

//Old Pagination Helper function
// export const getDisplayedEpisodes = (episodes: IEpisode[], page: number) => {
//   const lastEpisodeIndex = page * 18;
//   const firstEpisodeIndex = lastEpisodeIndex - 18;
//   return episodes.slice(firstEpisodeIndex, lastEpisodeIndex);
// };
