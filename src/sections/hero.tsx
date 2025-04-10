import BookNowLink from "@/components/UI/book-now-link";
import Container from "@/components/UI/container";

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero flex items-center text-[--main-white-txt-cl] w-full"
    >
      <Container>
        <h1 className="uppercase text-[42px] font-semibold	tracking-widest sm:text-[62px]">
          jbaidiuk
        </h1>
        <p className="mb-12 text-lg  sm:text-[30px]">
          Only quality haircut and hot towel shave
        </p>
        <p className="max-w-[400px] mb-12 text-lg sm:max-w-[560px]">
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
