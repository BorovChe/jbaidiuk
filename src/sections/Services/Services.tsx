import BookNowLink from "@/components/BookNowLink";
import Container from "@/components/Container";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import ServiceList from "@/components/Service/ServiceList";

const Services = () => {
  return (
    <Section>
      <Container>
        <SectionTitle>Мої послуги</SectionTitle>
        <ServiceList />
        <div className="w-[160px] mx-auto">
          <BookNowLink />
        </div>
      </Container>
    </Section>
  );
};

export default Services;
