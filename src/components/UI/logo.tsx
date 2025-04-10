import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="#hero"
      className="absolute top-1/2 left-2/4 translate-y-[-50%] translate-x-[-50%] block text-black m-auto 
       leading-none font-medium tracking-[.18em] text-center uppercase"
    >
      <p className="mb-[3px] text-[18px]">jbaidiuk</p>
      <span className="text-[10px]">Only quality haircut</span>
    </Link>
  );
};

export default Logo;
