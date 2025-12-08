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
import Sawm from "../pages/others/sawm/Sawm";
import Visual from "../pages/others/salat/visual/Visual";
import TimeTable from "../pages/others/sawm/TimeTable";
import Dowa from "../pages/others/sawm/dowa/Dowa";
import Maswala from "../pages/others/maswala/Maswala";
import Audio from "../pages/others/audio/Audio";

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
        path: "/salat/visual",
        element: <Visual />,
      },
      {
        path: "/sawm",
        children: [
          { path: "", element: <Sawm /> },
          { path: "full-month", element: <TimeTable /> },
        ],
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
        path: "/maslaha",
        element: <Maswala />,
      },
      {
        path: "/audio",
        element: <Audio />,
      },
    ],
  },
]);
export default router;
