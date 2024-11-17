import ContactItem from "../ContactItem";

import { contacts } from "@/data/contacts";

const ContactList = () => {
  return (
    <ul className="flex flex-col gap-3 mb-10 text-[--accent-cl] sm:mb-0">
      {contacts.map(({ id, title, iconPath, alt, href, target }) => (
        <ContactItem
          key={id}
          title={title}
          iconPath={iconPath}
          alt={alt}
          href={href}
          target={target}
        />
      ))}
    </ul>
  );
};

export default ContactList;
