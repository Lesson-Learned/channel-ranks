import { SHOW_DIRECTORY } from './constants';

export function getShowBannerPath(showId: string): string {
  return `${ SHOW_DIRECTORY }/${ showId }/banner`;
}

export function getShowPosterPath(showId: string): string {
  return `${ SHOW_DIRECTORY }/${ showId }/poster`;
}
