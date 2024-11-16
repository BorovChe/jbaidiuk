import { StaticImageData } from "next/image";

export interface IServiceAccordionProps {
  onToggle: () => void;
  isOpen: boolean;
  item: {
    id: number;
    title: string;
    duration: string;
    price: number;
    alt: string;
    images: StaticImageData[];
  };
}
