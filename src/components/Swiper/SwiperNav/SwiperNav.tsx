import Image from "next/image";

import { arrowLeft, arrowRight } from "../../../../public/icons/Swiper/index";

const SwiperNav = () => {
  return (
    <>
      <div className=".swiper-button-prev absolute  left-0 	top-0 z-50 flex items-center justify-center swiper-button-prev    h-[214px] w-[60px]">
        <div className="flex items-center justify-center w-[30px] h-[30px]  bg-[--arrow-fray-cl] rounded-full	">
          <Image src={arrowLeft} width={12} alt="Arrow Left" />
        </div>
      </div>
      <div className=".swiper-button-next absolute  right-0	top-0 z-50  flex items-center justify-center swiper-button-next  h-[214px] w-[60px]">
        <div className="flex items-center justify-center w-[30px]  h-[30px] bg-[--arrow-fray-cl] rounded-full	">
          <Image src={arrowRight} width={12} alt="Arrow Right" />
        </div>
      </div>
    </>
  );
};

export default SwiperNav;
