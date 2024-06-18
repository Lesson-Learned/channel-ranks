import { Country, Genre, Network } from '../shared';

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

export function buildShow(data: Show): Show {
  return { ...data };
}
