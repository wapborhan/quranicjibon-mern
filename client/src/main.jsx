import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import PreLoader from "./layout/PreLoader.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <HelmetProvider>
    <AuthProvider>
      <Suspense fallback={<PreLoader />}>
        <RouterProvider router={router} />
      </Suspense>
    </AuthProvider>
  </HelmetProvider>,
  // </React.StrictMode>,
);
