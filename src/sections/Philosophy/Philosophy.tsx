import Image from "next/image";

import Container from "@/components/UI/Container";

import philosophy from "../../../public/images/Philosophy/philosophy.jpg";
import SectionTitle from "@/components/UI/SectionTitle";
import Section from "@/components/UI/Section";

const Philosophy = () => {
  return (
    <Section>
      <Container>
        <SectionTitle>Моя філософія</SectionTitle>
        <div className="lg:flex items-center justify-between gap-4">
          <Image
            className="mb-10 lg:max-w-[590px] lg:m-0"
            src={philosophy}
            alt="Phylosophy"
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
