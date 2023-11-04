import { Country, Genre, Network } from '../types';

export interface Show {
  country: Country;
  description: string;
  endDate?: number;
  episodeCount: number;
  genre: Genre[];
  name: string;
  network: Network
  releaseDate: number;
  seasonCount: number;
}
