import BookNowLink from "@/components/UI/book-now-link";
import ContactsList from "@/components/contacts/contact-list";
import Container from "@/components/UI/container";
import SectionTitle from "@/components/UI/section-title";

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
