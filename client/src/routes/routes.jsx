import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import HomePage from "../pages/home/HomePage";
import About from "../pages/about/About";
import NotFound from "../layout/NotFound/NotFound";
import Page from "../layout/Page";
import Quran from "../pages/others/quran/Quran";
import AllahName from "../pages/others/names/AllahName";
import Kalema from "../pages/others/kalema/Kalema";

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
        path: "/allah-names",
        element: <AllahName />,
      },
      {
        path: "/quran",
        element: <Quran />,
      },
      {
        path: "/kalema",
        element: <Kalema />,
      },
    ],
  },
]);
export default router;
