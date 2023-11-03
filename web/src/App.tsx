import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AdminAddShowPage } from './pages/admin/add-show';
import { AdminShowsPage } from './pages/admin/shows';
import { Home } from './pages/home';
import { AdminRoutes } from './shared'; 

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <Home /> } path="/" />

        {/* ADMIN ROUTES */}
        <Route element={ <AdminAddShowPage /> } path={ AdminRoutes.AddShow } />
        <Route element={ <AdminShowsPage /> } path={ AdminRoutes.Shows } />

        {/* CATCH ALL */}
        <Route element={ <div>Page not found.</div> } path="*" />
      </Routes>
    </BrowserRouter>
  );
}
