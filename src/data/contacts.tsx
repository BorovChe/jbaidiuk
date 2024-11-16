import { StaticImageData } from "next/image";
import { instagram, phone, map } from "../../public/icons/Contacts/index";

interface IContacts {
  id: number;
  title: string;
  iconPath: StaticImageData;
  alt: string;
  href: string;
}

export const contacts: IContacts[] = [
  {
    id: 1,
    title: "st. Pyatnytska, 11 Chernihiv, 14005",
    iconPath: map,
    alt: "Map icon",
    href: "https://maps.app.goo.gl/Qzu57sayEtoWjRo16",
  },
  {
    id: 2,
    title: "+38 044 111 11 11",
    iconPath: phone,
    alt: "Phone icon",
    href: "tel:+380441111111",
  },
  {
    id: 3,
    title: "Instagram",
    iconPath: instagram,
    alt: "Instagram icon",
    href: "https://www.instagram.com/jbaidiuk2.0?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
];
