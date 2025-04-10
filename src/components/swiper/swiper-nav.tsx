import Image from "next/image";

const SwiperNav = () => {
  return (
    <>
      <div className="group absolute  left-0 	top-0 z-50 flex items-center justify-center swiper-button-prev    h-[214px] w-[60px] sm:h-[300px] lg:h-[380px]">
        <div className="flex items-center justify-center w-[30px] h-[30px]  bg-[--arrow-fray-cl] rounded-full transition-bg duration-300	group-hover:bg-white">
          <Image
            src="/icons/swiper/arrow-left.svg"
            width={12}
            height={12}
            alt="Arrow Left"
          />
        </div>
      </div>
      <div className="group absolute  right-0	top-0 z-50  flex items-center justify-center swiper-button-next  h-[214px] w-[60px] sm:h-[300px] lg:h-[380px]">
        <div className="flex items-center justify-center w-[30px]  h-[30px] bg-[--arrow-fray-cl] rounded-full transition-bg duration-300	group-hover:bg-white">
          <Image
            src="/icons/swiper/arrow-right.svg"
            width={12}
            height={12}
            alt="Arrow Right"
          />
        </div>
      </div>
    </>
  );
};

export default SwiperNav;
