import { StaticImageData } from "next/image";

import {
  haircut1,
  haircut2,
  haircut3,
  haircut4,
  haircut5,
  haircut6,
  haircut7,
} from "../../public/images/Service/Haircut";
import {
  beard1,
  beard2,
  beard3,
  beard4,
  beard5,
} from "../../public/images/Service/BeardTrim";

interface IServices {
  id: number;
  title: string;
  duration: string;
  price: number;
  alt: string;
  images: StaticImageData[];
}

const sevices: IServices[] = [
  {
    id: 1,
    title: "Чоловіча стрижка",
    duration: "1 година",
    price: 800,
    alt: "Haircit Image",
    images: [
      haircut1,
      haircut2,
      haircut3,
      haircut4,
      haircut5,
      haircut6,
      haircut7,
    ],
  },
  {
    id: 2,
    title: "Стрижка бороди",
    duration: "30 хвилин",
    price: 450,
    alt: "Beard Image",
    images: [beard1, beard2, beard3, beard4, beard5],
  },
  {
    id: 3,
    title: "Гоління",
    duration: " 30 хвилин",
    price: 250,
    alt: "Shaving Image",
    images: [beard5, beard2, beard3, beard4, beard1],
  },
  {
    id: 4,
    title: "Стрижка+борода",
    duration: "1 година 30 хвилин",
    price: 1100,
    alt: "Haircut + beard Image",
    images: [beard2, beard1, beard5, beard4, beard3],
  },
];

export default sevices;
