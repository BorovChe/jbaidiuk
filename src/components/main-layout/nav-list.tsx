import Link from "next/link";

import navList from "@/data/navLink.json";

export interface INavLinst {
  id: number;
  title: string;
  sectionId: string;
}

const NavList = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-8 items-center ">
        {navList.map(({ id, title, sectionId }: INavLinst) => (
          <li key={id} className="relative font-medium">
            <Link
              className={`flex items-center  min-h-[60px] text-[--accent-cl] leading-tight tracking-widest uppercase lg:text-[14px] 
                after:content-[''] after:block after:absolute after:bottom-4 after:left-1/2 after:-translate-x-1/2
                after:w-0 after:h-1 after:rounded-[15px] after:bg-[--accent-cl] after:hover:w-full after:transition-w after:duration-300
                `}
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
