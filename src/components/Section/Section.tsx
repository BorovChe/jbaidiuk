import { ISectionProps } from "./Section.types";

const Section = ({ children }: ISectionProps) => {
  return <section className="pt-20">{children}</section>;
};

export default Section;
