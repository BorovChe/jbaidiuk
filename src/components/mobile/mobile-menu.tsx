import Link from "next/link";

import MobileNavList from "./mobile-nav-list";

export interface IMobileMenuProps {
  toggleSidebar: () => void;
  isOpen: boolean;
}

const MobileMenu = ({ isOpen, toggleSidebar }: IMobileMenuProps) => {
  return (
    <div
      className={`fixed top-0 left-0 h-[100vh] w-full flex flex-col pt-48	 items-center  bg-[--main-white-txt-cl] z-[50] transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <MobileNavList toggleSidebar={toggleSidebar} />
      <Link
        onClick={() => toggleSidebar()}
        target="_blank"
        rel="noreferrer noopener"
        className="text-[--accent-cl] leading-tight  font-medium tracking-widest	 uppercase"
        href={
          "https://www.instagram.com/jbaidiuk2.0?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        }
      >
        Записатися
      </Link>
    </div>
  );
};

export default MobileMenu;
