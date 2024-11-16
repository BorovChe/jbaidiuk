import Link from "next/link";
import Image from "next/image";

import { IContactProps } from "./ContactItem.types";

const ContactItem = ({ title, iconPath, alt, href }: IContactProps) => {
  return (
    <li>
      <Link
        className="inline-block"
        target="_blank"
        rel="noreferrer noopener"
        href={href}
      >
        <div className="flex items-center gap-3">
          <Image src={iconPath} width={24} alt={alt} />
          <span className="font-medium		">{title}</span>
        </div>
      </Link>
    </li>
  );
};

export default ContactItem;
