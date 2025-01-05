import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import HomePage from "../pages/home/HomePage";
import About from "../pages/about/About";
import NotFound from "../layout/NotFound/NotFound";
import Page from "../layout/Page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/",
    element: <Page />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/quran",
        element: <About />,
      },
      {
        path: "/kalema",
        element: <About />,
      },
      {
        path: "/allah-names",
        element: <About />,
      },
    ],
  },
]);
export default router;
