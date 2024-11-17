import BookNowLink from "@/components/UI/BookNowLink";
import ContactsList from "@/components/Contacts/ContactList";
import Container from "@/components/UI/Container";
import SectionTitle from "@/components/UI/SectionTitle";

const Contacts = () => {
  return (
    <section id="contacts" className="py-20">
      <Container>
        <SectionTitle>Контакти</SectionTitle>
        <div className="sm:flex items-end lg:gap-10 lg:justify-center">
          <ContactsList />
          <div className="w-[160px] mx-auto sm:w-[200px] lg:m-0">
            <BookNowLink />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contacts;
