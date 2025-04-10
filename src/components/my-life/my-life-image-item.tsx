import Image from "next/image";

export interface IMyLifeImageItemProps {
  path: string;
}

const MyLifeImageItem = ({ path }: IMyLifeImageItemProps) => {
  return (
    <li className=" w-[47.5%] max-h-[50%]  lg:basis-[calc(25%-1rem)] ">
      <Image
        className="block object-cover aspect-square	 w-full h-full"
        src={`/images/my-life/${path}`}
        alt="My life image"
        width={280}
        height={280}
      />
    </li>
  );
};

export default MyLifeImageItem;
