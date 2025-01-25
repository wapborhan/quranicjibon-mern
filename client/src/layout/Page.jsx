import { Outlet } from "react-router-dom";
import Header from "./Pages/Header";
import SideBar from "./Pages/SideBar";
import MobileMenu from "./Pages/MobileMenu";
import { useState } from "react";

const Page = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  return (
    <div className="h-screen flex bg-white dark:bg-darks !dark:text-white">
      <div className="fixed top-0 left-0 w-full py-5 md:pl-[1.8rem] pl-2 pr-2 md:pr-[2rem] flex justify-between z-10  rorder-b shadow md:shadow-none  dark:text-white bg-white">
        <Header
          toggleMobileMenu={toggleMobileMenu}
          mobileMenuActive={mobileMenuActive}
        />
      </div>

      <SideBar />

      <div className="h-screen ransition duration-300">
        <MobileMenu
          mobileMenuActive={mobileMenuActive}
          toggleMobileMenu={toggleMobileMenu}
        />
      </div>
      <div className="relative w-full bg-body-grey-bg dark:bg-darkz md:rounded-tl-3xl pt-[85px] md:mt-[80px] md:p-4">
        <div className="w-full lg:w-full md:w-full h-full mx-auto overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Page;
