export const routes = {
  login: '/login',
  profile: '/profile',
  shows: '/shows',
  signup: '/signup',

  episode(
    showId: string,
    seasonNumber: number | string,
    episodeNumber: number | string
  ): string {
    return `/${showId}/${seasonNumber}/${episodeNumber}`;
  },

  show(showId: string) {
    return `${this.shows}/${showId}`;
  }
};
