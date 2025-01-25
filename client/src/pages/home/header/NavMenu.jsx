import { Link } from "react-router-dom";

const headLink = [
  { id: 0, title: "আল কুরআন", path: "/quran" },
  { id: 1, title: "কালেমা", path: "/kalema" },
  { id: 2, title: "সালাত", path: "/salat" },
  { id: 3, title: "সাওম", path: "/sawm" },
  { id: 4, title: "জাকাত", path: "/zakat" },
  { id: 5, title: "হজ্জ", path: "/hajj" },
];

const NavMenu = () => {
  return (
    <>
      {headLink.map((link) => {
        return (
          <li className="group" key={link.id}>
            <Link to={link?.path} className="text-black">
              {link?.title}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default NavMenu;
