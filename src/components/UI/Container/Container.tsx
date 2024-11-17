import { IContainerProps } from "./Container.types";

const Container = ({ children }: IContainerProps) => {
  return (
    <div className="container 2xl mx-auto px-5 sm:px-8 sm:max-w-[640px] lg:max-w-[1200px]">
      {children}
    </div>
  );
};

export default Container;
