import BookNowLink from "@/components/BookNowLink";
import Container from "@/components/Container";

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(rgba(25, 28, 38, 0.5), rgba(25, 28, 38, 0.5)), url('/images/Hero/hero.jpg')",
      }}
      className="flex items-center text-[--main-white-txt-cl] w-full h-[100vh]	bg-cover bg-no-repeat bg-center"
    >
      <Container>
        <h1 className="mb-1 uppercase text-[40px] 	 font-semibold	 	tracking-widest">
          jbaidiuk
        </h1>
        <p className="mb-12 text-lg">
          Only quality haircut and hot towel shave
        </p>
        <p className="max-w-[400px] mb-12 text-lg ">
          Наша команда працює за американськими стандартами, які були
          сертифіковані у 1940-1960 роках
        </p>
        <BookNowLink />
      </Container>
    </section>
  );
};

export default Hero;
