import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
// import Footer from "../components/footer/Footer";

const Root = () => {
  const location = useLocation();
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <div className="">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Root;
