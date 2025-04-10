"use client";

import { useState } from "react";
import Image from "next/image";

import MobileMenu from "../mobile/mobile-menu";

const MobileHeaderNavigation = () => {
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
      <button
        type="button"
        className="lg:hidden flex items-center justify-center w-10 h-10 z-[100]"
        onClick={toggleSidebar}
      >
        <Image
          src={isOpen ? "/icons/header/close.svg" : "/icons/header/menu.svg"}
          alt="Menu"
          width={30}
          height={30}
        />
      </button>
      <MobileMenu toggleSidebar={toggleSidebar} isOpen={isOpen} />
    </>
  );
};

export default MobileHeaderNavigation;
