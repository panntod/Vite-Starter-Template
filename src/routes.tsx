import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

const Home = lazy(() => import("./pages/home"));
const Playground = lazy(() => import("./pages/playground"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/playground",
    element: <Playground />
  },
  {
    path: "*",
    element: <Navigate to="/" replace />
  }
]);

export default router;
