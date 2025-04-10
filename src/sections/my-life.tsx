import Container from "@/components/UI/container";
import MyLifeImageList from "@/components/my-life/my-life-lmage-list";
import Section from "@/components/UI/section";
import SectionTitle from "@/components/UI/section-title";

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
