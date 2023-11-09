import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreateShowPage } from './pages/admin/create-show';
import { OverviewPage } from './pages/admin/overview';
import { ReadShowsPage } from './pages/admin/read-shows';
import { UpdateShowPage } from './pages/admin/update-show';
import { Home } from './pages/home';
import { AdminRoutes } from './shared'; 

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <Home /> } path="/" />

        {/* ADMIN ROUTES */}
        <Route element={ <CreateShowPage /> } path={ AdminRoutes.AddShow } />
        <Route element={ <OverviewPage /> } path={ AdminRoutes.Home } />
        <Route element={ <ReadShowsPage /> } path={ AdminRoutes.Shows } />
        <Route
          element={ <UpdateShowPage /> }
          path={ AdminRoutes.Show(':id') }
        />

        {/* CATCH ALL */}
        <Route element={ <div>Page not found.</div> } path="*" />
      </Routes>
    </BrowserRouter>
  );
}
