const ROOT_ADMIN_ROUTE = '/admin';

export const adminRoutes = {
  addShow: `${ROOT_ADMIN_ROUTE}/shows/add`,
  home: ROOT_ADMIN_ROUTE,
  shows: `${ROOT_ADMIN_ROUTE}/shows`,

  show(id: string) {
    return `${this.shows}/${id}`;
  },
};

export const routes = {
  login: '/login',
  shows: '/shows',
  signup: '/signup',

  show(id: string) {
    return `${this.shows}/${id}`;
  }
};
