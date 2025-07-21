import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Landing from "./pages/landing";
import Dashboard from "./pages/dashboard";
import Auth from "./pages/auth";
import Redirect from "./pages/redirect-link";
import Link from "./pages/link";
import AppLayout from "./layouts/app-layout";
import UrlProvider from "./context";

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
