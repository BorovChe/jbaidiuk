import Link from "next/link";

import navList from "@/data/navLink.json";

import { IMobileNavListProps } from "./NavList.types";

const MobileNavList = ({ toggleSidebar }: IMobileNavListProps) => {
  return (
    <nav className="mb-8">
      <ul className="flex flex-col gap-8 items-center">
        {navList.map(({ id, title, sectionId }) => (
          <li key={id}>
            <Link
              onClick={() => toggleSidebar()}
              className="text-[--main-white-txt-cl] leading-tight tracking-widest	 uppercase"
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

export default MobileNavList;
