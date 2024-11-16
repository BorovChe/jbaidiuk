import { StaticImageData } from "next/image";

export interface IContactProps {
  title: string;
  iconPath: StaticImageData;
  alt: string;
  href: string;
}
