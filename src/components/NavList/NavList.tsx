import Link from "next/link";
import navList from "@/data/navLink.json";

import { INavLinst, INavListProps } from "./NavList.types";

const NavList = ({ textColor }: INavListProps) => {
  return (
    <ul className="hidden  xl:flex gap-8 pr-[200px] items-center">
      {navList.map(({ id, title, sectionId }: INavLinst) => (
        <li key={id}>
          <Link
            className={`text-[${textColor}] leading-tight tracking-widest	 uppercase`}
            href={`#${sectionId}`}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
