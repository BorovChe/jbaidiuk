import BookNowLink from "@/components/UI/BookNowLink";
import ContactsList from "@/components/Contacts/ContactList";
import Container from "@/components/UI/Container";
import SectionTitle from "@/components/UI/SectionTitle";

const Contacts = () => {
  return (
    <section id="contacts" className="py-20">
      <Container>
        <SectionTitle>Контакти</SectionTitle>
        <ContactsList />
        <div className="w-[160px] mx-auto">
          <BookNowLink />
        </div>
      </Container>
    </section>
  );
};

export default Contacts;
