export interface IEpisode {
  id: number;
  show: IShow;
  season: number;
  number: number;
}

export interface IShow {
  id: number;
  name: string;
  status: string;
  summary: string;
  genres: string[];
  network: INetwork;
  schedule: ISchedule;
  image: IImage;
}

export interface IImage {
  medium: string;
  original: string;
}

export interface ISchedule {
  days: string[];
}

export interface INetwork {
  name: string;
}

export type EpisodeContextType = {
  episodes: IEpisode[];
};
