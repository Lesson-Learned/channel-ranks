import { WithId } from '../libraries';
import { ProfileShowStatus } from '../profile';
import { Country, Genre, Network, Rating, Status } from '../shared';

export interface ClientShow extends WithId<Show> {
  poster?: string;
}

export interface Episode {
  // Constructed from the show ID, the season, and episode number.
  _id: string;
  description: string;
  duration: number;
  name: string;
  releaseDate: number;
  views: number;
}

export interface Show {
  country: Country;
  description: string;
  endDate?: number;
  genre: Genre[];
  name: string;
  network: Network;
  numberOfEachProfileShowStatus: Record<ProfileShowStatus, number>;
  numberOfEachRating: Record<Rating, number>;
  // Index indicates the season, element indicates number of episodes.
  seasons: number[];
  startDate?: number;
  status: Status;
}
