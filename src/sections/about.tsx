import AboutImagesList from "@/components/about/about-image-list";
import Container from "@/components/UI/container";
import Section from "@/components/UI/section";
import SectionTitle from "@/components/UI/section-title";

const About = () => {
  return (
    <Section id="about">
      <Container>
        <SectionTitle>Хто я?</SectionTitle>
        <div className="lg:flex justify-between gap-4">
          <div className="lg:max-w-[480px]">
            <p className="text-[22px] mb-6">
              Привіт! Мене звати Євген Байдюк, і я професійний барбер з
              багаторічним досвідом у цій галузі. Моя робота – це не просто
              стрижка та догляд за волоссям, а справжнє мистецтво створення
              унікальних образів для кожного клієнта.
            </p>
            <p className="mb-6">
              Я дотримуюсь класичних підходів, працюючи у стилі «старої школи».
              Найбільше ціную чоловічі стрижки, які перевірені часом — вони
              зручні, практичні та чудово підходять для повсякденного укладання.
              Класика завжди залишається актуальною, адже вона поєднує простоту
              та елегантність.
            </p>
            <p className="mb-6 lg:m-0">
              Для мене гоління — це більше, ніж просто щоденна процедура. Це
              мистецтво, яке я постійно вдосконалюю: як у роботі, так і на
              практиці з моделями. Я завжди прагну до майстерності, щоб кожен
              клієнт отримав найкращий досвід. І, що важливо, послуга
              залишається доступною, адже я хочу, щоб кожен міг спробувати це і
              по-справжньому оцінити.
            </p>
          </div>
          <AboutImagesList />
        </div>
      </Container>
    </Section>
  );
};

export default About;
