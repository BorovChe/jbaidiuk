import Link from "next/link";
import Image from "next/image";

export interface IContactProps {
  title: string;
  icon?: string;
  alt: string;
  href: string;
  target: string;
}

const ContactItem = ({ title, icon, alt, href, target }: IContactProps) => {
  return (
    <li className="flex items-center">
      <Link
        className="inline-block"
        target={target}
        rel="noreferrer noopener"
        href={href}
      >
        <div className="flex items-center gap-3 ">
          {icon && (
            <Image
              src={`/icons/contacts/${icon}`}
              width={24}
              height={24}
              alt={alt}
            />
          )}
          <span className="font-medium	sm:text-xl	">{title}</span>
        </div>
      </Link>
    </li>
  );
};

export default ContactItem;
