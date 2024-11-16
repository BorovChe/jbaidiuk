import Image from "next/image";

import { ISwiperItemProps } from "./SwiperItem.types";

const SwiperItem = ({ imagePath, alt }: ISwiperItemProps) => {
  return (
    <Image className="object-cover	w-full h-full" src={imagePath} alt={alt} />
  );
};

export default SwiperItem;
