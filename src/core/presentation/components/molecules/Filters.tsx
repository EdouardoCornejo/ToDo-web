import { FC } from "react";

interface FilterButtonProps {
  action: () => void;
  active: string;
  filter: string;
}

export const FilterButton: FC<FilterButtonProps> = ({
  action,
  active,
  filter,
}) => {
  return (
    <button
      onClick={action}
      className={
        `hover:text-white cursor-pointer px-1 transition-all duration-300 ease-in-out` +
        (active.toLowerCase().includes(filter.toLowerCase())
          ? "text-indigo-700"
          : "text-gray-400")
      }
    >
      {filter}
    </button>
  );
};
