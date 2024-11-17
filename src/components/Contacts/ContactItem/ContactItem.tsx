import Link from "next/link";
import Image from "next/image";

import { IContactProps } from "./ContactItem.types";

const ContactItem = ({ title, iconPath, alt, href, target }: IContactProps) => {
  return (
    <li className="flex items-center">
      <Link
        className="inline-block"
        target={target}
        rel="noreferrer noopener"
        href={href}
      >
        <div className="flex items-center gap-3 ">
          {iconPath && <Image src={iconPath} width={24} alt={alt} />}
          <span className="font-medium	sm:text-xl	">{title}</span>
        </div>
      </Link>
    </li>
  );
};

export default ContactItem;
