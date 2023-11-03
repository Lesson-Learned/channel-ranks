import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <div>Home</div> } path="/" />

        {/* CATCH ALL */}
        <Route element={ <div>Page not found.</div> } path="*" />
      </Routes>
    </BrowserRouter>
  );
}
