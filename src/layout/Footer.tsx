import Container from "@/components/Container";
import Logo from "@/components/Logo";
import NavList from "@/components/NavList";

const Footer = () => {
  return (
    <footer className="flex items-center min-h-[78px]  border-[--footer-border-cl-30] border-t-[0.5px] border-solid text-[--main-dark-cl]">
      <Container>
        <div className="flex justify-between gap-8">
          <NavList textColor="--main-dark-cl" />
          <Logo textColor="--main-dark-cl" />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
