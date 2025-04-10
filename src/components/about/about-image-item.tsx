import Image from "next/image";

export interface IAboutImageItemProps {
  path: string;
}

const AboutImageItem = ({ path }: IAboutImageItemProps) => {
  return (
    <li className="w-[47.5%] max-h-[50%]">
      <Image
        className="block object-cover aspect-square	 w-full h-full"
        src={`/images/about/${path}`}
        alt="About Image"
        width={280}
        height={280}
      />
    </li>
  );
};

export default AboutImageItem;
