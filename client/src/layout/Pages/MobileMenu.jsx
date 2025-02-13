import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { TbNumber99Small } from "react-icons/tb";
import { BiDonateHeart } from "react-icons/bi";
import { GiBookmarklet, GiPrayerBeads, GiPrayer } from "react-icons/gi";
import { FaKaaba, FaBookQuran } from "react-icons/fa6";
import { BsMoonStars } from "react-icons/bs";

const MobileMenu = ({ mobileMenuActive, toggleMobileMenu }) => {
  const navMenu = [
    {
      title: "নীড় পাতা",
      icon: AiOutlineHome,
      link: "/",
    },
    {
      title: "আল্লাহ্‌র নাম",
      icon: TbNumber99Small,
      link: "/allah-names",
    },
    {
      title: "কুরআন",
      icon: FaBookQuran,
      link: "/quran",
    },

    {
      title: "কালেমা",
      icon: GiBookmarklet,
      link: "/kalema",
    },
    {
      title: "সালাত",
      icon: GiPrayer,
      link: "/salat",
    },
    {
      title: "সাওম",
      icon: BsMoonStars,
      link: "/sawm",
    },
    {
      title: "জাকাত",
      icon: BiDonateHeart,
      link: "/zakat",
    },
    {
      title: "হজ্জ",
      icon: FaKaaba,
      link: "/hajj",
    },
    {
      title: "তাসবিহ",
      icon: GiPrayerBeads,
      link: "/tasbih",
    },
  ];
  return (
    <div
      className={`${
        mobileMenuActive ? "left-0" : " -left-80"
      } md:hidden fixed top-[13%]  w-full ransition duration-300 h-full z-50 bg-s[#00000080] text-black`}
    >
      <div className="w-8/12 bg-white shadow-xl rounded-e-lg pb-3">
        {navMenu.map((item, index) => (
          <NavLink
            to={item.link}
            className="menu-list relative group "
            key={index}
            onClick={toggleMobileMenu}
          >
            <item.icon size={28} />
            <h1 className="font-HindSiliguri">{item.title}</h1>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
