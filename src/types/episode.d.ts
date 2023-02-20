export interface IEpisode {
  id: number;
  show: IShow;
  season: number;
  number: number;
}

export interface IShow {
  id: number;
  image: IImage;
  name: string;
  summary: string;
  genres: string;
}

export interface IImage {
  medium: string;
}

export type EpisodeContextType = {
  episodes: IEpisode[];
};
