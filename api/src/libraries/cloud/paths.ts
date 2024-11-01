const PROFILE_DIRECTORY = 'profiles';
const SHOW_DIRECTORY = 'shows';

export function getProfilePhotoPath(profilePublicId: number): string {
  return `${PROFILE_DIRECTORY}/${profilePublicId}/photo`;
}

export function getShowBannerPath(showId: string): string {
  return `${SHOW_DIRECTORY}/${showId}/banner`;
}

export function getShowPosterPath(showId: string): string {
  return `${SHOW_DIRECTORY}/${showId}/poster`;
}
