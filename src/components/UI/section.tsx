import { ReactNode } from "react";

export interface ISectionProps {
  id?: string;
  children: ReactNode;
}

const Section = ({ id, children }: ISectionProps) => {
  return (
    <section id={id} className="pt-20">
      {children}
    </section>
  );
};

export default Section;
