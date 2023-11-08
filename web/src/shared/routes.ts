export const AdminRoutes = {
  AddShow: '/admin/shows/add',
  Show(id: string) {
    return `/admin/shows/${ id }`;
  },
  Shows: '/admin/shows'
};
