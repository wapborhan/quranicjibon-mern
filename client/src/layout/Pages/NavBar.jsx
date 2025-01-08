import { AiOutlineHome } from "react-icons/ai";
import { TbNumber99Small } from "react-icons/tb";
import { BiDonateHeart } from "react-icons/bi";
import { GiBookmarklet, GiPrayerBeads, GiPrayer } from "react-icons/gi";
import { FaKaaba, FaBookQuran } from "react-icons/fa6";
import { BsMoonStars } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import ToolTip from "../../components/shared/ToolTip";

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

const NavBar = () => {
  return (
    <>
      {navMenu.map((item, index) => (
        <NavLink
          to={item.link}
          className="menu-list relative group"
          key={index}
        >
          <item.icon size={28} />
          <ToolTip title={item.title} />
        </NavLink>
      ))}
    </>
  );
};

export default NavBar;
