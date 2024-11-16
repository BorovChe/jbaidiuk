import Container from "@/components/UI/Container";
import MyLifeImageList from "@/components/MyLife/MyLifeImageList";
import Section from "@/components/UI/Section";
import SectionTitle from "@/components/UI/SectionTitle";

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
