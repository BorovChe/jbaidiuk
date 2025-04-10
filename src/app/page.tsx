import ScrollToTop from "@/components/scroll-to-top";
import About from "@/sections/about";
import Contacts from "@/sections/contacts";
import Hero from "@/sections/hero";
import MyLife from "@/sections/my-life";
import Philosophy from "@/sections/philosophy";
import Services from "@/sections/services";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Philosophy />
      <MyLife />
      <Contacts />
      <ScrollToTop />
    </>
  );
}
