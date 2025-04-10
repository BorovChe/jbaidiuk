import Container from "@/components/UI/container";
import Logo from "@/components/UI/logo";

const Footer = () => {
  return (
    <footer className="relative flex items-center min-h-[64px]  border-[--footer-border-cl-30] border-t-[0.5px] border-solid text-[--main-dark-cl]">
      <Container>
        <Logo/>
      </Container>
    </footer>
  );
};

export default Footer;
