import { Show } from '@api';
import { milliToYmd } from '@shared';
import { ShowForm } from '../types/form';

export function showToForm(show: Show): ShowForm {
  return {
    country: show.country,
    description: show.description,
    endDate: show.endDate ? milliToYmd(show.endDate) : '',
    episodeCount: show.episodeCount,
    genre: show.genre,
    name: show.name,
    network: show.network,
    releaseDate: milliToYmd(show.releaseDate),
    seasonCount: show.seasonCount
  };
}
