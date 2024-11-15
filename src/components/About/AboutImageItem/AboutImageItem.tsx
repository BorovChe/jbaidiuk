import { FC } from "react";
import Image from "next/image";

import { IAboutImageItemProps } from "./AboutImageItem.types";

const AboutImageItem: FC<IAboutImageItemProps> = ({ path }) => {
  return (
    <li className=" w-[47.5%] max-h-[50%]">
      <Image
        className="block object-cover aspect-square	 w-full h-full"
        src={path}
        alt="About Image"
      />
    </li>
  );
};

export default AboutImageItem;
