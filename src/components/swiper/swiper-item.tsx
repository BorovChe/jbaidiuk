import Image from "next/image";

export interface ISwiperItemProps {
  imagePath: string;
  alt: string;
}
const SwiperItem = ({ imagePath, alt }: ISwiperItemProps) => {
  return (
    <Image
      className="object-cover	w-full h-full"
      src={`/images/service/${imagePath}`}
      alt={alt}
      width={540}
      height={380}
    />
  );
};

export default SwiperItem;
