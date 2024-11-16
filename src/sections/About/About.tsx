import AboutImagesList from "@/components/About/AboutImageList";
import Container from "@/components/Container";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";

const About = () => {
  return (
    <Section>
      <Container>
        <SectionTitle>Хто я?</SectionTitle>
        <p className="text-[22px] mb-6">
          Привіт! Мене звати Євген Байдюк, і я професійний барбер з багаторічним
          досвідом у цій галузі. Моя робота – це не просто стрижка та догляд за
          волоссям, а справжнє мистецтво створення унікальних образів для
          кожного клієнта.
        </p>
        <p className="mb-6">
          Ми працюємо за стандартами «старої школи», спираючись на класичні
          чоловічі стрижки. Вони зручні, практичні і підходять для повсякденного
          укладання.
        </p>
        <p className="mb-6">
          Для нас гоління - це не проста повсякденна процедура. Барбери постійно
          відпрацьовують його як в робочому процесі, так і на моделях, щоб
          підвищувати свою майстерність. А вартість цієї послуги в T.A.B. -
          найнижча в місті, щоб кожен міг спробувати і оцінити її.
        </p>
        <AboutImagesList />
      </Container>
    </Section>
  );
};

export default About;
