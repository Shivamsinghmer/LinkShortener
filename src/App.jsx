import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Landing from "./pages/landing.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Auth from "./pages/auth.jsx";
import Redirect from "./pages/redirect-link.jsx";
import Link from "./pages/link.jsx";
import AppLayout from "./layouts/app-layout.jsx";
import UrlProvider from "./context.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/:id",
        element: <Redirect />,
      },
      {
        path: "/link/:id",
        element: <Link />,
      },
    ],
  },
]);

const App = () => {
  return (
    <UrlProvider>
      <RouterProvider router={router} />
    </UrlProvider>
  );
};

export default App;
