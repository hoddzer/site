import { Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/home-page';
import { NotFoundPage } from './pages/not-found-page';
import { SobrePage } from './pages/sobre-page';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sobre" element={<SobrePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
