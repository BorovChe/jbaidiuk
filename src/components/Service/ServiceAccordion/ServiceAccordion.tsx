"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import SwiperFade from "@/components/Swiper/SwiperFade";

import { triangleUp, triangleDown } from "../../../../public/icons/Service";

import { IServiceAccordionProps } from "./ServiceAccordion.types";

const ServiceAccordion = ({
  item,
  isOpen,
  onToggle,
}: IServiceAccordionProps) => {
  const { title, duration, price, alt, images } = item;

  const [maxHeight, setMaxHeight] = useState<string>("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <li className=" flex flex-col  max-w-[300px] mx-auto	 py-5 border-solid	 border-[#b3b3b3] border-t-[1px] ">
      <div className="relative" onClick={onToggle}>
        <Image
          className="absolute top-[42px] right-[10px]"
          width={14}
          src={isOpen ? triangleUp : triangleDown}
          alt="arrow"
        />
        <h3 className=" mb-2 text-[28px] font-semibold leading-none		">
          {title}
        </h3>
        <p className="text-[--accent-cl]">Тривалість {duration}</p>
        <p className="text-[28px] font-semibold ">{price}₴</p>
      </div>
      <div
        ref={contentRef}
        style={{
          maxHeight: maxHeight,
        }}
        className={`transition-max-height duration-500 ease-in-out overflow-hidden`}
      >
        <SwiperFade alt={alt} imagesPath={images} />
      </div>
    </li>
  );
};

export default ServiceAccordion;
