import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './auth/context/auth-provider';
import { Episode } from './pages/episode';
import { Home } from './pages/home';
import { LoginPage } from './pages/login';
import { ProfilePage } from './pages/profile';
import { ShowPage } from './pages/show';
import { ShowsPage } from './pages/shows';
import { SignupPage } from './pages/signup';
import { routes } from './shared';

export function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={ <Home /> } path="/" />

          {/* ACCOUNT ROUTES */}
          <Route element={ <LoginPage /> } path={ routes.login } />
          <Route element={ <SignupPage /> } path={ routes.signup } />

          {/* MEDIA ROUTES */}
          <Route
            element={ <Episode /> }
            path={ routes.episode(':showId', ':season', ':episode')}
          />
          <Route element={ <ShowPage /> } path={ routes.show(':showId') } />
          <Route element={ <ShowsPage /> } path={ routes.shows } />

          {/* PROFILE ROUTES */}
          <Route element={ <ProfilePage /> } path={ routes.profile } />

          {/* CATCH ALL */}
          <Route element={ <div>Page not found.</div> } path="*" />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
