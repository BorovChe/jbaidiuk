import BookNowLink from "@/components/UI/BookNowLink";
import Container from "@/components/UI/Container";
import Section from "@/components/UI/Section";
import SectionTitle from "@/components/UI/SectionTitle";
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
