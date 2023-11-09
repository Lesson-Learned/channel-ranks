export const AdminRoutes = {
  AddShow: '/admin/shows/add',
  Home: '/admin',
  Show(id: string) {
    return `/admin/shows/${ id }`;
  },
  Shows: '/admin/shows'
};
