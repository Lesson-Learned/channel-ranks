import { Show } from '../models/show';

interface Params extends Show {}

export function buildShow(data: Params): Show {
  return {
    country: data.country,
    description: data.description.trim(),
    ...(data.endDate && { endDate: data.endDate }),
    episodeCount: data.episodeCount,
    genre: data.genre,
    name: data.name.trim(),
    network: data.network,
    releaseDate: data.releaseDate,
    seasonCount: data.seasonCount
  };
}