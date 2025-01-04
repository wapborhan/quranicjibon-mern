import { Outlet } from "react-router-dom";
// import Footer from "../components/footer/Footer";

const Root = () => {
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
