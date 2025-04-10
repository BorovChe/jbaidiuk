import Image from "next/image";

import Container from "@/components/UI/container";

import SectionTitle from "@/components/UI/section-title";
import Section from "@/components/UI/section";

const Philosophy = () => {
  return (
    <Section>
      <Container>
        <SectionTitle>Моя філософія</SectionTitle>
        <div className="lg:flex items-center justify-between gap-4">
          <Image
            className="mb-10 lg:max-w-[590px] lg:m-0"
            src="/images/philosophy/philosophy.jpg"
            alt="Phylosophy"
            width={590}
            height={400}
          />
          <div className="lg:w-[440px]">
            <strong className="block mb-10 text-2xl	font-semibold	">
              Я – професійний барбер, який відданий традиціям «старої школи».
              Моє основне завдання – створювати класичні чоловічі стрижки, які
              підходять для кожного типу волосся та форми голови.
            </strong>
            <p className="text-xl	font-light	">
              Моя філософія будується на дотриманні традицій, перевірених часом,
              а також на повазі до клієнтів, їх смаків і поглядів. Я завжди
              намагаюся знайти баланс між бажанням клієнта і класичними
              техніками, що дозволяє створити неповторний образ
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Philosophy;
