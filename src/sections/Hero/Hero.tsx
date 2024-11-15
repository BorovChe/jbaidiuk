import Container from "@/components/Container";

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(rgba(25, 28, 38, 0.4), rgba(25, 28, 38, 0.4)), url('/images/Hero/hero.jpg')",
      }}
      className="text-[--main-white-txt-cl] w-full h-[832px] pt-[480px]	bg-cover bg-no-repeat bg-center"
    >
      <Container>
        <h1 className="mb-1 uppercase text-[40px] leading-none	 font-medium	 	tracking-widest">
          jbaidiuk
        </h1>
        <p className="mb-4 text-lg">Only quality haircut and hot towel shave</p>
        <p className="text-lg max-w-[400px]">
          Наша команда працює за американськими стандартами, які були
          сертифіковані у 1940-1960 роках
        </p>
      </Container>
    </section>
  );
};

export default Hero;
