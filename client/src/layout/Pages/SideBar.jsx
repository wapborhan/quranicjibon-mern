// import { BiDonateBlood } from "react-icons/bi";
import NavBar from "./NavBar";
// import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidenav relative hidden w-24 !mt-20 p-4 pb-32 md:flex flex-col justify-start lg:gap-3 md:gap-2 items-center dark:text-dark-text">
      <NavBar />
      {/* <Link
        to="/donate"
        className="absolute left-0 bottom-3 translate-x-1/4 p-4 bg-[#2b9e76] text-white rounded-xl"
      >
        <BiDonateBlood size={28} />
      </Link> */}
    </div>
  );
};

export default SideBar;
