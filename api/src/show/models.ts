import { WithId } from '../libraries';
import { Country, Genre, Network, Status } from '../shared';

export interface Episode {
  // Constructed from the show ID, the season and episode number.
  _id: string;
  description: string;
  duration: number;
  name: string;
  releaseDate: number;
}

export interface Show {
  country: Country;
  description: string;
  endDate?: number;
  genre: Genre[];
  name: string;
  network: Network;
  // Index indicates the season, element indicates number of episodes.
  seasons: number[];
  startDate?: number;
  status: Status;
}

export interface ClientShow extends WithId<Show> {
  banner: string;
  poster: string;
}

export function buildEpisode(data: Episode): Episode {
  return { ...data };
}

export function buildShow(data: Omit<Show, 'seasons'>): Show {
  return {
    ...data,
    seasons: []
  };
}
