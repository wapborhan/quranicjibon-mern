import { createBrowserRouter } from "react-router-dom";
import {
  Root,
  Page,
  NotFound,
  HomePage,
  About,
  Quran,
  AllahName,
  Kalema,
  Suras,
  Salat,
  Visual,
  Sawm,
  TimeTable,
  Maswala,
  IslamicNames,
  InfoDEtails,
  CoomingSoon,
} from "./lazyPages";
import SignIn from "../layout/auth/SignIn";
import Dashboard from "../pages/others/dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <About /> },
      { path: "signin", element: <SignIn /> },

      {
        element: <Page />,
        children: [
          { path: "dashboard", element: <Dashboard /> },
          { path: "allah-names", element: <AllahName /> },
          { path: "quran", element: <Quran /> },
          { path: "quran/sura", element: <Suras /> },
          { path: "kalema", element: <Kalema /> },
          { path: "salat", element: <Salat /> },
          { path: "salat/visual", element: <Visual /> },

          {
            path: "sawm",
            children: [
              { index: true, element: <Sawm /> },
              { path: "full-month", element: <TimeTable /> },
            ],
          },

          { path: "zakat", element: <CoomingSoon /> },
          { path: "hajj", element: <CoomingSoon /> },
          { path: "maslaha", element: <Maswala /> },

          {
            path: "islamic-names",
            children: [
              { index: true, element: <IslamicNames /> },
              { path: ":link", element: <InfoDEtails /> },
            ],
          },

          { path: "tasbih", element: <CoomingSoon /> },
        ],
      },
    ],
  },
]);

export default router;
