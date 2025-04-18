import { IEpisode } from '@/types/episode';

//Function to remove HTML tags and reduce length
export const processSummary = (summary: string, length: number) => {
  return summary
    .split(' ')
    .slice(0, length)
    .join(' ')
    .replace(/(<([^>]+)>)/gi, '');
};

// Function to ensure image URLs are https
export const getSecureImageUrl = (
  imageUrl: string | null | undefined
): string => {
  if (!imageUrl) return '/icons/tv.svg';

  // Ensure URLs start with https
  if (imageUrl.startsWith('http:')) {
    return imageUrl.replace('http:', 'https:');
  }

  return imageUrl;
};

//Old Pagination Helper function
// export const getDisplayedEpisodes = (episodes: IEpisode[], page: number) => {
//   const lastEpisodeIndex = page * 18;
//   const firstEpisodeIndex = lastEpisodeIndex - 18;
//   return episodes.slice(firstEpisodeIndex, lastEpisodeIndex);
// };
