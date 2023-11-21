import { Show } from '@api';
import { milliToYmd } from '@shared';
import { ShowFormFields } from '../types/form';

export function showToForm(show: Show): ShowFormFields {
  return {
    banner: null,
    country: show.country,
    description: show.description,
    endDate: show.endDate ? milliToYmd(show.endDate) : '',
    episodeCount: show.episodeCount,
    genre: show.genre,
    name: show.name,
    network: show.network,
    poster: null,
    releaseDate: milliToYmd(show.releaseDate),
    seasonCount: show.seasonCount
  };
}
