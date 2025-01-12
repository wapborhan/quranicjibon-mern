import { Link } from "react-router-dom";

const headLink = [
  {
    id: 0,
    title: "আল কুরআন",
    path: "/quran",
  },
  {
    id: 1,
    title: "কালেমা",
    path: "/kalema",
  },
  // {
  //   id: 2,
  //   title: "সালাত",
  //   path: "/pages/salat",
  // },
  {
    id: 3,
    title: "আল্লাহর নাম",
    path: "/allah-names",
  },

  // {
  //   id: 3,
  //   title: "কুরবানি",
  //   path: "/pages/qurbani",
  // },
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
