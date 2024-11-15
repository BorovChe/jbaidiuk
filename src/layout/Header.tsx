import Image from "next/image";

import NavList from "@/components/NavList";
import Logo from "@/components/Logo";

import { burgerMenu } from "../../public/icons/index";

const Header = () => {
  return (
    <header
      className="blur-filter fixed w-full flex items-center min-h-[54px] px-4
     bg-[#0c0c0cbf] shadow-[0_4px_12px_#191c2666] border-[--header-border-cl-20] border-b-[0.5px] border-solid "
    >
      <div className="flex justify-between gap-8">
        <Image
          src={burgerMenu}
          alt="Menu"
          width={28}
          height={28}
          className="xl:hidden"
        />
        <NavList textColor="--main-white-txt-cl" />
        <Logo textColor="--main-white-txt-cl" />
      </div>
    </header>
  );
};

export default Header;
