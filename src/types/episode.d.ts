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
  schedule?: {
    days: string[];
  };
  image?: {
    medium: string;
    original: string;
  };
  rating?: {
    average: number;
  };
}

interface ICast {
  person: {
    name: string;
    image?: {
      medium: string;
      original: string;
    };
  };
  character: {
    name: string;
  };
}
