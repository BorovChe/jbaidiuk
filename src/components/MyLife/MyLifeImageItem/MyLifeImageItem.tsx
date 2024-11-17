import Image from "next/image";

import { IMyLifeImageItemProps } from "./MyLifeImageItem.types";

const MyLifeImageItem = ({ path }: IMyLifeImageItemProps) => {
  return (
    <li className=" w-[47.5%] max-h-[50%]  lg:basis-[calc(25%-1rem)] ">
      <Image
        className="block object-cover aspect-square	 w-full h-full"
        src={path}
        alt="My life image"
      />
    </li>
  );
};

export default MyLifeImageItem;
