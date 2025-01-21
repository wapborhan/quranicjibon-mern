import { FaBookQuran } from "react-icons/fa6";
import { FiAlignJustify, FiAlignLeft } from "react-icons/fi";
import { LiaSignInAltSolid } from "react-icons/lia";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ toggleMobileMenu, mobileMenuActive }) => {
  const [dark, setDark] = useState(true);

  const toggleDarkMode = () => {
    setDark(!dark);
  };

  return (
    <>
      <div className="w-11 lg-min:w-fit lg:block md:block hidden">
        <div className="icon text-[2.2rem] leading-7 style-Kalpurush-webKit text-[#1fa471]  xs:text-xl">
          <FaBookQuran />
        </div>
      </div>
      <div
        className="w-11 lg-min:w-fit lg:hidden md:hidden flex items-center justify-center "
        onClick={toggleMobileMenu}
      >
        <div className="icon leading-7 style-Kalpurush-webKit text-[#1fa471]">
          {mobileMenuActive ? (
            <FiAlignLeft size={35} />
          ) : (
            <FiAlignJustify size={35} />
          )}
        </div>
      </div>
      <Link to="/" className="flex items-center cursor-pointer">
        <div className="ml-4 xss:ml-3 md-max:block">
          <h1 className="text-[2rem] leading-7 font-HindSiliguri text-[#1fa471] xss:hidden xs:text-xl">
            Quranic Jibon
          </h1>
        </div>
      </Link>
      <div className="flex items-center justify-end md-max:gap-4 lg-min:gap-20 2xl-min:gap-5">
        <div
          className="rounded-lg  flex items-center justify-center cursor-pointer"
          onClick={toggleDarkMode}
        >
          {dark ? (
            <>
              <LiaSignInAltSolid
                size={35}
                onClick={toggleDarkMode}
                className="p-1 rounded cursor-pointer text-[#1fa471]"
              />
            </>
          ) : (
            <>
              {" "}
              <FaRegUserCircle
                size={35}
                onClick={toggleDarkMode}
                className="p-1 rounded cursor-pointer text-[#1fa471]"
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
