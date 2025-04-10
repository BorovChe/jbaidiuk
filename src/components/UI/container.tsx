import { ReactNode } from "react";

export interface IContainerProps {
  children: ReactNode;
}

const Container = ({ children }: IContainerProps) => {
  return (
    <div className="container 2xl mx-auto px-5 sm:px-8 sm:max-w-[640px] lg:max-w-[1200px]">
      {children}
    </div>
  );
};

export default Container;
