export const AdminRoutes = {
  AddShow: '/admin/shows/add',
  Home: '/admin',
  Show(id: string) {
    return `/admin/shows/${ id }`;
  },
  Shows: '/admin/shows'
};

export const Routes = {
  Login: '/login',
  Show(id: string) {
    return `/shows/${ id }`;
  },
  Shows: '/shows',
  Signup: '/signup'
};
