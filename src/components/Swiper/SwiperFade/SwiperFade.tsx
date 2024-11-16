"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import SwiperNav from "../SwiperNav";

import { ISwiperFadeProps } from "./SwiperFade.types";
import SwiperItem from "../SwiperItem";

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
      className="relative w-[300px] h-[214px]"
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
