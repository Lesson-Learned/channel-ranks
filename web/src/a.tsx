import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './auth/context/auth-provider';
import { CreateShowPage } from './pages/admin/create-show';
import { OverviewPage } from './pages/admin/overview';
import { ReadShowsPage } from './pages/admin/read-shows';
import { UpdateShowPage } from './pages/admin/update-show';
import { Home } from './pages/home';
import { LoginPage } from './pages/login';
import { ShowPage } from './pages/show';
import { SignupPage } from './pages/signup';
import { AdminRoutes, Routes as Paths } from './shared'; 

export function App() {
  return (
    <AuthProvider>
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

          {/* ACCOUNT ROUTES */}
          <Route element={ <LoginPage /> } path={ Paths.Login } />
          <Route element={ <SignupPage /> } path={ Paths.Signup } />

          <Route element={ <ShowPage /> } path={ Paths.Show(':id') } />

          {/* CATCH ALL */}
          <Route element={ <div>Page not found.</div> } path="*" />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
