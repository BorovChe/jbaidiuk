import { IContainerProps } from "./Container.types";

const Container = ({ children }: IContainerProps) => {
  return <div className="container 2xl mx-auto px-4">{children}</div>;
};

export default Container;
