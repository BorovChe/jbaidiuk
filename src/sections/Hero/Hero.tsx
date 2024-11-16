import BookNowLink from "@/components/UI/BookNowLink";
import Container from "@/components/UI/Container";

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(rgba(25, 28, 38, 0.5), rgba(25, 28, 38, 0.5)), url('/images/Hero/hero.jpg')",
      }}
      className="flex items-center text-[--main-white-txt-cl] w-full h-[820px]  	bg-cover bg-no-repeat bg-center"
    >
      <Container>
        <h1 className="uppercase text-[42px] font-semibold	tracking-widest">
          jbaidiuk
        </h1>
        <p className="mb-12 text-lg">
          Only quality haircut and hot towel shave
        </p>
        <p className="max-w-[400px] mb-12 text-lg ">
          Я дотримуюся американських стандартів, які були впроваджені ще в
          1940–1960-х роках. Ці підходи перевірені часом і гарантують якість у
          кожній деталі.
        </p>
        <BookNowLink />
      </Container>
    </section>
  );
};

export default Hero;
