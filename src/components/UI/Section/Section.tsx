import { ISectionProps } from "./Section.types";

const Section = ({ id, children }: ISectionProps) => {
  return (
    <section id={id} className="pt-20">
      {children}
    </section>
  );
};

export default Section;
