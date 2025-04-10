import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import SwiperItem from "./swiper-item";
import SwiperNav from "./swiper-nav";

export interface ISwiperFadeProps {
  imagesPath: string[];
  alt: string;
}

const SwiperFade = ({ alt, imagesPath }: ISwiperFadeProps) => {
  return (
    <Swiper
      effect={"fade"}
      loop={true}
      speed={500}
      modules={[EffectFade, Navigation]}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
      className="relative w-[320px] h-[214px] sm:w-[460px] sm:h-[300px] lg:w-[540px] lg:h-[380px]"
    >
      {imagesPath.map((item, i) => (
        <SwiperSlide key={i}>
          <SwiperItem imagePath={item} alt={alt} />
        </SwiperSlide>
      ))}
      <SwiperNav />
    </Swiper>
  );
};

export default SwiperFade;
