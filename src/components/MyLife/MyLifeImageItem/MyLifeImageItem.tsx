import { FC } from "react";
import { IMyLifeImageItemProps } from "./MyLifeImageItem.types";
import Image from "next/image";

const MyLifeImageItem: FC<IMyLifeImageItemProps> = ({ path }) => {
  return (
    <li className=" w-[47.5%] max-h-[50%]">
      <Image
        className="block object-cover aspect-square	 w-full h-full"
        src={path}
        alt="My life image"
      />
    </li>
  );
};

export default MyLifeImageItem;
