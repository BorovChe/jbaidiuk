import Container from "@/components/Container";
import Link from "next/link";

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
        <Link
          className="flex items-center justify-center w-40	py-3 uppercase tracking-wider	text-sm	 font-medium rounded-sm	bg-[--accent-cl]"
          href={"/"}
        >
          Записатися
        </Link>
      </Container>
    </section>
  );
};

export default Hero;
