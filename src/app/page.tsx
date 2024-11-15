import Header from "@/layout/Header";
import About from "@/sections/About";
import Hero from "@/sections/Hero";
import MyLife from "@/sections/MyLife";
import Philosophy from "@/sections/Philosophy";
import Services from "@/sections/Services";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Philosophy />
      <MyLife />
    </>
  );
}
