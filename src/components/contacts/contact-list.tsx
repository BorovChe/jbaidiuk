import ContactItem from "./contact-item";
import contacts from "@/data/contacts.json";

const ContactList = () => {
  return (
    <ul className="flex flex-col gap-3 mb-10 text-[--accent-cl] sm:mb-0">
      {contacts.map((contact) => (
        <ContactItem key={contact.id} {...contact} />
      ))}
    </ul>
  );
};

export default ContactList;
