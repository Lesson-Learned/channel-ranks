import { Show } from '../models/show';

interface Params {
  description: string;
  episodeCount: number;
  name: string;
  releaseDate: number;
  seasonCount: number;
}

export function buildShow(data: Params): Show {
  return {
    description: data.description.trim(),
    episodeCount: data.episodeCount,
    name: data.name.trim(),
    releaseDate: data.releaseDate,
    seasonCount: data.seasonCount
  };
}