"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import SwiperFade from "@/components/swiper/swiper-fade";

export interface IServiceAccordionProps {
  id: number;
  title: string;
  duration: string;
  price: number;
  alt: string;
  images: string[];
  openId: number | null;
  setOpenId: (id: number | null) => void;
}

const ServiceAccordion = ({
  id,
  title,
  duration,
  price,
  alt,
  images,
  openId,
  setOpenId,
}: IServiceAccordionProps) => {
  const isOpen = openId === id;

  const [maxHeight, setMaxHeight] = useState<string>("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setOpenId(isOpen ? null : id);
  };

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <li className=" flex flex-col  max-w-[320px] mx-auto py-5 border-solid border-[#b3b3b3] border-t-[1px]  sm:max-w-[460px] lg:max-w-[740px] cursor-pointer	">
      <div
        className="relative sm:flex sm:justify-between"
        onClick={handleToggle}
      >
        <Image
          className="absolute top-[42px] right-[10px] sm:top-[40px]"
          width={14}
          height={14}
          src={
            isOpen
              ? "/icons/service/triangle-up.svg"
              : "/icons/service/triangle-down.svg"
          }
          alt="arrow"
        />
        <div>
          <h3 className=" mb-2 text-[28px] font-semibold leading-none		">
            {title}
          </h3>
          <p className="text-[--accent-cl]">Тривалість {duration}</p>
        </div>
        <p className="text-[28px] font-semibold sm:leading-none	">{price}₴</p>
      </div>
      <div
        ref={contentRef}
        style={{
          maxHeight: maxHeight,
        }}
        className={`transition-max-height duration-500 ease-in-out overflow-hidden`}
      >
        <div className="pt-4">
          <SwiperFade alt={alt} imagesPath={images} />
        </div>
      </div>
    </li>
  );
};

export default ServiceAccordion;
