import { FC, ReactNode } from "react";

interface FiltersContainerProps {
    children: ReactNode;
  }

export const FiltersContainer: FC<FiltersContainerProps> = ({ children }) => {
    return (
      <div className="flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600">
        {children}
      </div>
    );
  };