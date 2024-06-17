import {  getTodos } from "../../../../presentation/store/core/slices/todo/slice/todo.slice";
import { store } from "../../../../presentation/store/store";
import { TodoItem } from "../../../entity";
import { GenericUseCase, ReduxDispatch } from "../../../interface";

enum FilterTodo {
  ALL = "all",
  ACTIVE = "active",
  COMPLETED = "completed",
}

export class FilteredTodosUseCase
  implements GenericUseCase<ReduxDispatch & { filter?: string }, void>
{
  public execute({
    dispatch,
    filter,
  }: ReduxDispatch & { filter?: string }): void {
    console.log("🚀 ~ filter:", filter);
    const {
      core: {
        todoSlice: { originalTodos },
      },
    } = store.getState();

    console.log("🚀 ~ originalTodos:", originalTodos);

    const handleFilter = () => {
      if (!filter || filter === FilterTodo.ALL) {
        return originalTodos;
      }

      let filtered: TodoItem[] = [];
      if (filter === FilterTodo.ACTIVE) {
        filtered = originalTodos.filter((todo) => todo.completed === false);
      } else if (filter === FilterTodo.COMPLETED) {
        filtered = originalTodos.filter((todo) => todo.completed === true);
      }

      return filtered;
    };

    const filteredArr = handleFilter();

    dispatch(getTodos(filteredArr));
  }
}
