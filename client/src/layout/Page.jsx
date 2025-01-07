import { Outlet } from "react-router-dom";
import Header from "./Pages/Header";
import SideBar from "./Pages/SideBar";
import MobileMenu from "./Pages/MobileMenu";

const Page = () => {
  return (
    <div className="h-screen flex bg-white dark:bg-darks !dark:text-white">
      <div className="fixed top-0 left-0 w-full p-3 pl-[1.8rem] flex justify-between z-10  rorder-b shadow md:shadow-none  dark:text-white ">
        <Header />
      </div>

      <SideBar />

      <MobileMenu />
      <div className="relative w-full bg-body-grey-bg dark:bg-darkz md:rounded-tl-3xl pt-[65px] md:mt-[80px] md:p-4 ">
        <div className="w-full lg:w-full md:w-full h-full mx-auto overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Page;
