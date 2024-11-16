import { ISectionTitleProps } from "./SectionTitle.types";

const SectionTitle = ({ children }: ISectionTitleProps) => {
  return <h2 className="text-2xl mb-10	tracking-widest">{children}</h2>;
};

export default SectionTitle;
