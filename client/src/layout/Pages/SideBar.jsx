import { RiMenuUnfold3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";
import ToolTip from "../../components/shared/ToolTip";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // outside click close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="sidenav relative hidden w-24 !mt-20 p-4 pb-32 md:flex flex-col items-center dark:text-dark-text">
      <NavBar />

      {/* More Button */}
      <div ref={menuRef} className="relative mt-6">
        <button
          onClick={() => setOpen(!open)}
          className="menu-list bg-[#0a993c] hover:bg-green-600 text-white p-3 rounded-xl cursor-pointer focus:outline-none"
        >
          <RiMenuUnfold3Fill size={28} />
          <ToolTip title="আরও" />
        </button>

        {/* Submenu */}
        <div
          className={`absolute bottom-0 left-[65px] translate-x-[20px]  w-44 bg-white dark:bg-dark-bg shadow-xl rounded-xl p-2 transition-all duration-300 z-50 border
          ${open ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}
        >
          <Link
            to="/donate"
            onClick={() => setOpen(false)}
            className="block w-full p-2 text-center text-sm rounded-lg hover:bg-primary-600 hover:text-white transition"
          >
            দান করুন
          </Link>

          <button
            onClick={() => setOpen(false)}
            className="mt-1 w-full p-2 text-center text-xs text-gray-500 hover:text-red-500"
          >
            বন্ধ করুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
