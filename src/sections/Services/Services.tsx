import Container from "@/components/Container";
import ServiceList from "@/components/Service/ServiceList";
import Link from "next/link";

const Services = () => {
  return (
    <section className="pt-20">
      <Container>
        <h2 className="text-2xl mb-10	tracking-widest">Мої послуги</h2>
        <ServiceList />
        <Link
          className="flex items-center justify-center w-40 mx-auto		py-3 uppercase tracking-wider	text-sm	 font-semibold rounded-sm text-[--main-white-txt-cl]	bg-[--accent-cl]"
          href={"/"}
        >
          Записатися
        </Link>
      </Container>
    </section>
  );
};

export default Services;
