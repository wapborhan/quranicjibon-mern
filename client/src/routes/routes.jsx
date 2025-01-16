import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import HomePage from "../pages/home/HomePage";
import About from "../pages/about/About";
import NotFound from "../layout/NotFound/NotFound";
import Page from "../layout/Page";
import Quran from "../pages/others/quran/Quran";
import AllahName from "../pages/others/names/AllahName";
import Kalema from "../pages/others/kalema/Kalema";
import CoomingSoon from "../components/CoomingSoon";
import Suras from "../pages/others/quran/details/Suras";
import Salat from "../pages/others/salat/Salat";

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
        path: "/quran/sura",
        element: <Suras />,
      },
      {
        path: "/kalema",
        element: <Kalema />,
      },
      {
        path: "/salat",
        element: <Salat />,
      },
      {
        path: "/sawm",
        element: <CoomingSoon />,
      },
      {
        path: "/zakat",
        element: <CoomingSoon />,
      },
      {
        path: "/hajj",
        element: <CoomingSoon />,
      },
      {
        path: "/tasbih",
        element: <CoomingSoon />,
      },
    ],
  },
]);
export default router;
