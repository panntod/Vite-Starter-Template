import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Loading } from "./components/Loading";
import { Toaster } from "./components/Toast";
import router from "./routes";

// Configuration
import "./lib/i18n";
import "./styles/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster />
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);
