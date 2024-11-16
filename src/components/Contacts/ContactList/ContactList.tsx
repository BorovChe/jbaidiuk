import ContactItem from "../ContactItem";

import { contacts } from "@/data/contacts";

const ContactList = () => {
  return (
    <ul className="flex flex-col gap-3 mb-10 text-[--accent-cl]">
      {contacts.map(({ id, title, iconPath, alt, href }) => (
        <ContactItem
          key={id}
          title={title}
          iconPath={iconPath}
          alt={alt}
          href={href}
        />
      ))}
    </ul>
  );
};

export default ContactList;
