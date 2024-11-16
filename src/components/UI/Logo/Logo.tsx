import Link from "next/link";

import { ILogoProps } from "./Logo.types";

const Logo = ({ textColor }: ILogoProps) => {
  return (
    <div
      className={`absolute top-1/2 left-2/4	translate-y-[-50%] translate-x-[-50%]  block text-[${textColor}] m-auto  leading-none tracking-[.18em] text-center uppercase hover:scale-[1.1] transition-transform duration-[--main-transition]`}
    >
      <p className="mb-[3px] text-[18px]  font-medium">jbaidiuk</p>
      <span className="text-[8px]">Only quality haircut</span>
    </div>
  );
};

export default Logo;
