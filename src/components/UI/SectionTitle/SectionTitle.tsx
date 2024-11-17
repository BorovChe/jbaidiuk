import { ISectionTitleProps } from "./SectionTitle.types";

const SectionTitle = ({ children }: ISectionTitleProps) => {
  return <h2 className="text-2xl mb-10	 sm:text-5xl		">{children}</h2>;
};

export default SectionTitle;
