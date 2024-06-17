import { FC } from "react";
import { FilterButtonContainer } from "../molecules/FilterButtonContainer";
import { FilterButton } from "../molecules/Filters";
import { FiltersContainer } from "../molecules/FiltersContainer";
import { ItemsLeft } from "../atoms/ItemsLeft";
import { TodoFiltersProps } from "../../../domain/interface";


  
  const TodoFilters: FC<TodoFiltersProps> = ({
    total,
    activeFilter,
    showAllTodos,
    showActiveTodos,
    showCompletedTodos,
    handleClearComplete,
  }) => {
    return (
      /* A function that takes in props and returns a component. */
      <FiltersContainer>
        <ItemsLeft total={total} />
        <FilterButtonContainer>
          <FilterButton
            action={() => showAllTodos()}
            active={activeFilter}
            filter="All"
          />
          <FilterButton
            action={() => showActiveTodos()}
            active={activeFilter}
            filter="Active"
          />
          <FilterButton
            action={() => showCompletedTodos()}
            active={activeFilter}
            filter="Completed"
          />
        </FilterButtonContainer>
  
        {/* Calling the handleClearComplete function. */}
        <button
          onClick={() => handleClearComplete()}
          className=" text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in-out"
        >
          Clear Completed
        </button>
      </FiltersContainer>
    );
  };
  
  export default TodoFilters;
  