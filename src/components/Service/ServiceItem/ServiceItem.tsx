import { FC } from "react";

import { IServiceItemProps } from "./Service.types";

const ServiceItem: FC<IServiceItemProps> = ({ title, duration, price }) => {
  return (
    <li className="flex flex-col  max-w-[300px] mx-auto	 py-2 border-solid	 border-[#b3b3b3] border-t-[1px] ">
      <h3 className="text-[28px] font-semibold	">{title}</h3>
      <p className="text-[--accent-cl]">Тривалість {duration}</p>
      <p className="text-[28px] font-semibold">{price}₴</p>
    </li>
  );
};

export default ServiceItem;
