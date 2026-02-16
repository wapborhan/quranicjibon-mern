import { FaBookQuran } from "react-icons/fa6";
import { FiAlignJustify, FiAlignLeft } from "react-icons/fi";
import { LiaSignInAltSolid } from "react-icons/lia";
import { FaRegUserCircle } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = ({ toggleMobileMenu, mobileMenuActive }) => {
  const { user } = useAuth();

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
      <div className="ml-4 xss:ml-3 md-max:block">
        <h1 className="md:text-[2rem] text-[1.5rem] lg:leading-7 font-HindSiliguri text-[#1fa471] xss:hidden xs:text-xl">
          Quranic Jibon
        </h1>
      </div>
      <div className="flex items-center justify-end md-max:gap-4 lg-min:gap-20 2xl-min:gap-5">
        <div className="rounded-lg  flex items-center justify-center cursor-pointer">
          {user ? (
            <Link to="/dashboard">
              <FaRegUserCircle
                size={35}
                className="p-1 rounded cursor-pointer text-[#1fa471]"
              />
            </Link>
          ) : (
            <Link to="/signin">
              <LiaSignInAltSolid
                size={35}
                className="p-1 rounded cursor-pointer text-[#1fa471]"
              />
            </Link>
          )}
          <GoGear
            size={35}
            className="p-1 rounded cursor-pointer text-[#1fa471]"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
