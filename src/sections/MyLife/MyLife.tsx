import Container from "@/components/Container";
import MyLifeImageList from "@/components/MyLife/MyLifeImageList";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";

const MyLife = () => {
  return (
    <Section>
      <Container>
        <SectionTitle>Чим я живу</SectionTitle>
        <MyLifeImageList />
      </Container>
    </Section>
  );
};

export default MyLife;
