"use client";

import { useState } from "react";
import Image from "next/image";

import NavList from "@/components/NavList";
import Logo from "@/components/UI/Logo";
import MobileMenu from "@/components/Mobile/MobileMenu";

import { burgerMenu, close } from "../../public/icons/Header";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  return (
    <>
      <header
        className="blur-filter fixed w-full z-[999] flex items-center min-h-[64px] px-5
     bg-[#0c0c0cbf] shadow-[0_4px_12px_#191c2666] border-[--header-border-cl-20] border-b-[0.5px] border-solid sm:px-8"
      >
        <div className="flex justify-between gap-8">
          <button
            type="button"
            className="lg:hidden flex items-center justify-center w-10 h-10"
            onClick={toggleSidebar}
          >
            <Image
              src={isOpen ? close : burgerMenu}
              alt="Menu"
              width={30}
              height={30}
            />
          </button>

          <NavList textColor="--main-white-txt-cl" />
          <Logo textColor="--main-white-txt-cl" />
        </div>
      </header>
      <MobileMenu toggleSidebar={toggleSidebar} isOpen={isOpen} />
    </>
  );
};

export default Header;
