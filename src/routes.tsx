import { createBrowserRouter, Navigate } from 'react-router-dom';

import Landing from './pages/landing';
import Playground from './pages/playground';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/playground',
    element: <Playground />,
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);

export default router;
