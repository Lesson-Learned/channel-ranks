import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './auth/context/auth-provider';
import { CreateShowPage } from './pages/admin/create-show';
import { ReadShowsPage } from './pages/admin/read-shows';
import { UpdateShowPage } from './pages/admin/update-show';
import { Home } from './pages/home';
import { LoginPage } from './pages/login';
import { ShowPage } from './pages/show';
import { SignupPage } from './pages/signup';
import { adminRoutes, routes } from './shared'; 

export function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={ <Home /> } path="/" />

          {/* ADMIN ROUTES */}
          <Route element={ <CreateShowPage /> } path={ adminRoutes.addShow } />
          <Route element={ <ReadShowsPage /> } path={ adminRoutes.home } />
          <Route element={ <ReadShowsPage /> } path={ adminRoutes.shows } />
          <Route
            element={ <UpdateShowPage /> }
            path={ adminRoutes.show(':id') }
          />

          {/* ACCOUNT ROUTES */}
          <Route element={ <LoginPage /> } path={ routes.login } />
          <Route element={ <SignupPage /> } path={ routes.signup } />

          { /* MEDIA ROUTES */}
          <Route element={ <ShowPage /> } path={ routes.show(':id') } />

          {/* CATCH ALL */}
          <Route element={ <div>Page not found.</div> } path="*" />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
