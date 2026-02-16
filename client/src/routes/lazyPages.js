import { lazy } from "react";

/* Layouts */
export const Root = lazy(() => import("../layout/Root"));
export const Page = lazy(() => import("../layout/Page"));
export const NotFound = lazy(() => import("../layout/NotFound/NotFound"));

/* Main pages */
export const HomePage = lazy(() => import("../pages/home/HomePage"));
export const About = lazy(() => import("../pages/about/About"));

/* Quran */
export const Quran = lazy(() => import("../pages/others/quran/Quran"));
export const Suras = lazy(() => import("../pages/others/quran/details/Suras"));

/* Others */
export const AllahName = lazy(() => import("../pages/others/names/AllahName"));
export const Kalema = lazy(() => import("../pages/others/kalema/Kalema"));
export const Salat = lazy(() => import("../pages/others/salat/Salat"));
export const Visual = lazy(() => import("../pages/others/salat/visual/Visual"));
export const Sawm = lazy(() => import("../pages/others/sawm/Sawm"));
export const TimeTable = lazy(() => import("../pages/others/sawm/TimeTable"));
export const Maswala = lazy(() => import("../pages/others/maswala/Maswala"));
export const IslamicNames = lazy(
  () => import("../pages/others/islamic-names/IslamicNames"),
);
export const InfoDEtails = lazy(
  () => import("../pages/others/islamic-names/InfoDEtails"),
);
export const Tasbih = lazy(() => import("../pages/others/tasbih/Tasbih"));

/* Components */
export const CoomingSoon = lazy(() => import("../components/CoomingSoon"));
