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
  network: {
    name: string;
  };
  schedule: {
    days: string[];
  };
  image: IImage;
}

interface IImage {
  medium: string;
  original: string;
}

interface ICast {
  id: number;
  name: string;
  character: {
    name: string;
  };
}

export interface IShowsContext {
  episodes: IEpisode[];
  show?: IShow;
  getShow: (id: number) => void;
}