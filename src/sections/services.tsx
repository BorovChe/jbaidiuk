import ServiceList from "@/components/service/service-list";
import BookNowLink from "@/components/UI/book-now-link";
import Container from "@/components/UI/container";
import Section from "@/components/UI/section";
import SectionTitle from "@/components/UI/section-title";

const Services = () => {
  return (
    <Section id="services">
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
