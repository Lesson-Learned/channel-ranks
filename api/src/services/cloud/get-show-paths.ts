const directory = 'shows';

export function getShowBannerPath(showId: string): string {
  return `${ directory }/${ showId }/banner`;
}

export function getShowPosterPath(showId: string): string {
  return `${ directory }/${ showId }/poster`;
}
