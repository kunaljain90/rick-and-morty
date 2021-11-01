export type ImagesFromApi = {
  name: string;
  image: string;
  id: number;
};

export type Status = 'Alive' | 'Dead' | 'unknown';

export type URLNameApi = { name: string; url: string };

export type InfoFromApi = {
  count: number;
  pages: number;
  next: string;
  prev: null | string;
};

export type DataFromAPI = {
  id: number;
  name: string;
  status: Status;
  type: string;
  gender: string;
  species: string;
  origin: URLNameApi;
  location: URLNameApi;
  image: string;
  episode: string[];
  url: string;
  created: string;
};
