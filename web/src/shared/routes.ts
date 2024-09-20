export const routes = {
  login: '/login',
  shows: '/shows',
  signup: '/signup',

  show(id: string) {
    return `${this.shows}/${id}`;
  }
};
