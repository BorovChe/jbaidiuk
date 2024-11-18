import Link from "next/link";
import navList from "@/data/navLink.json";

import { INavLinst, INavListProps } from "./NavList.types";

const NavList = ({ textColor }: INavListProps) => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-8 items-center">
        {navList.map(({ id, title, sectionId }: INavLinst) => (
          <li
            key={id}
            className="hover:scale-[1.1] transition-transform duration-[--main-transition]"
          >
            <Link
              className={`text-[${textColor}] leading-tight tracking-widest	 uppercase lg:text-[14px] `}
              href={`#${sectionId}`}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavList;
