import Container from "@/components/UI/Container";
import Logo from "@/components/UI/Logo";

const Footer = () => {
  return (
    <footer className="relative flex items-center min-h-[64px]  border-[--footer-border-cl-30] border-t-[0.5px] border-solid text-[--main-dark-cl]">
      <Container>
        <Logo textColor="--main-dark-cl" />
      </Container>
    </footer>
  );
};

export default Footer;
