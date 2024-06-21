import { Country, Genre, Network, Status } from '../shared';

export interface Show {
  country: Country;
  description: string;
  endDate?: string;
  genre: Genre[];
  name: string;
  network: Network;
  numEpisodes?: number;
  numSeasons?: number;
  startDate?: string;
  status: Status;
}

export function buildShow(data: Show): Show {
  return { ...data };
}
