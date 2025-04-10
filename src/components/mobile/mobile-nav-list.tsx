import Link from "next/link";

import navList from "@/data/navLink.json";

export interface IMobileNavListProps {
  toggleSidebar: () => void;
}

const MobileNavList = ({ toggleSidebar }: IMobileNavListProps) => {
  return (
    <nav className="mb-8">
      <ul className="flex flex-col gap-8 items-center">
        {navList.map(({ id, title, sectionId }) => (
          <li key={id}>
            <Link
              onClick={() => toggleSidebar()}
              className="text-[--accent-cl] leading-tight tracking-widest font-medium uppercase"
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
