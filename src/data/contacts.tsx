import { StaticImageData } from "next/image";
import { instagram, map } from "../../public/icons/Contacts/index";

interface IContacts {
  id: number;
  title: string;
  iconPath?: StaticImageData;
  alt: string;
  href: string;
  target: string;
}

export const contacts: IContacts[] = [
  {
    id: 1,
    title: "st. Pyatnytska, 11 Chernihiv, 14005",
    iconPath: map,
    alt: "Map icon",
    href: "https://maps.app.goo.gl/Qzu57sayEtoWjRo16",
    target: "_blank",
  },
  {
    id: 2,
    title: "+380 73 105-15-05",
    alt: "Phone icon",
    href: "tel:+380731051505",
    target: "_self",
  },
  {
    id: 3,
    title: "+380 63 580-58-48",
    alt: "Phone icon",
    href: "tel:+380635805848",
    target: "_self",
  },
  {
    id: 4,
    title: "Instagram",
    iconPath: instagram,
    alt: "Instagram icon",
    href: "https://www.instagram.com/jbaidiuk2.0?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    target: "_blank",
  },
];
