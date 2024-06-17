import { FC, ReactNode } from "react";

interface FilterButtonContainerProps {
  children: ReactNode;
}

export const FilterButtonContainer: FC<FilterButtonContainerProps> = ({
  children,
}) => {
  return <div className="flex items-center space-x-2">{children}</div>;
};
