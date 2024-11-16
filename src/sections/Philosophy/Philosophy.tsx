import Image from "next/image";

import Container from "@/components/Container";

import philosophy from "../../../public/images/Philosophy/philosophy.jpg";
import SectionTitle from "@/components/SectionTitle";
import Section from "@/components/Section";

const Philosophy = () => {
  return (
    <Section>
      <Container>
        <SectionTitle>Моя філософія</SectionTitle>
        <Image className="mb-10" src={philosophy} alt="Phylosophy" />
        <strong className="block mb-10 text-2xl	font-semibold	">
          Я – професійний барбер, який відданий традиціям «старої школи». Моє
          основне завдання – створювати класичні чоловічі стрижки, які підходять
          для кожного типу волосся та форми голови. Ці стрижки забезпечують
          зручність, практичність і ідеально підходять для щоденного укладання.
        </strong>
        <p className="text-xl	font-light	">
          Моя філософія будується на дотриманні традицій, перевірених часом, а
          також на повазі до клієнтів, їх смаків і поглядів. Я завжди намагаюся
          знайти баланс між бажанням клієнта і класичними техніками, що дозволяє
          створити неповторний образ
        </p>
      </Container>
    </Section>
  );
};

export default Philosophy;
