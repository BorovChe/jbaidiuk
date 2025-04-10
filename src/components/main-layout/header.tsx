import Image from "next/image";
import Link from "next/link";

import NavList from "./nav-list";
import MobileHeaderNavigation from "./mobile-header-navigation";
import Logo from "@/components/UI/logo";

const Header = () => {
  return (
    <header
      className="fixed w-full z-[999] flex items-center min-h-[60px] px-5
     bg-[--main-white-txt-cl] shadow-[0_4px_12px_#191c2666] border-[--header-border-cl-20] border-b-[0.5px] border-solid sm:px-8"
    >
      <div className="w-full flex justify-between items-center gap-8">
        <MobileHeaderNavigation />
        <NavList />
        <Logo />
        <Link
          href="https://www.instagram.com/jbaidiuk2.0?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          className="flex items-center justify-center w-[30px] h-[30px]"
        >
          <Image
            src="/icons/contacts/instagram.svg"
            alt="instagram"
            width={22}
            height={22}
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
