import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import Navbar from "../../../components/organisms/Navbar";
import { Title } from "../../../components/atoms/Title";
import { TodoInput } from "../../../components/organisms/TodoInput";
import TodoList from "../../../components/organisms/TodoList";
import { todoThunkService } from "../../../store/core/slices/todo/service/todo-thunk.service";
import { FilterTodoProps } from "../../../../domain";

enum FilterTodo {
  ALL = "all",
  ACTIVE = "active",
  COMPLETED = "completed",
}

export const TodoApp = () => {
  const dispatch = useAppDispatch();
  const {authSlice:{token}, todoSlice:{todos} } = useAppSelector(
    ({ core: { todoSlice, persistedReducer:{authSlice} } }) => ({todoSlice, authSlice})
  );
  const [activeFilter, setActiveFilter] = useState<FilterTodoProps>("all");
  const [filteredTodos, setFilteredTodos] = useState(todos);


  const showAllTodos = () => {
    setActiveFilter(FilterTodo.ALL);
  };

  const showActiveTodos = () => {
    setActiveFilter(FilterTodo.ACTIVE);
  };

  const showCompletedTodos = () => {
    setActiveFilter(FilterTodo.COMPLETED);
  };

  const addTodo = async (title: string, date: string) => 
    dispatch(todoThunkService.addTodoThunk({ title, date }));

  const handleSetComplete = async (id: string, completed: boolean) =>
    dispatch(todoThunkService.updateTodoThunk({ id, completed }));

  const handleDelete = async (id: string) =>
    dispatch(todoThunkService.deleteTodoThunk({ id }));

  const handleClearComplete = async () => {
    const completedTodos = todos.filter((todo) => todo.completed === true);
    completedTodos.forEach((todo) => {
      dispatch(todoThunkService.deleteTodoThunk({ id: todo.id }));
    });
  };

  // useEffect(() => {
  //   if (activeFilter === FilterTodo.ALL) {
  //     void dispatch(todoThunkService.filterTodos(FilterTodo.ALL))

  //   } else if (activeFilter === "active") {
  //     void dispatch(todoThunkService.filterTodos(FilterTodo.ACTIVE))
  //   } else if (activeFilter === "completed") {
  //     void dispatch(todoThunkService.filterTodos(FilterTodo.COMPLETED))
  //   }
  // }, [activeFilter, dispatch]);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredTodos(todos);
    } else if (activeFilter === "active") {
      const activeTodos = todos.filter((todo) => todo.completed === false);
      setFilteredTodos(activeTodos);
    } else if (activeFilter === "completed") {
      const completedTodos = todos.filter((todo) => todo.completed === true);
      setFilteredTodos(completedTodos);
    }
  }, [activeFilter, todos]);

  useEffect(() => {
    void dispatch(todoThunkService.getTodosThunk());

  }, [dispatch, token]);

  return (
    <div>
      <Navbar />
      <div className="bg-white m-h-screen h-full font-inter text-gray-100 flex items-center justify-center py-10 px-5">
        <div className="rounded-xl container flex flex-col max-w-xl">
          <Title />
          <TodoInput addTodo={addTodo} />
          <TodoList
            todos={filteredTodos}
            activeFilter={activeFilter}
            handleSetComplete={handleSetComplete}
            handleDelete={handleDelete}
            showAllTodos={showAllTodos}
            showActiveTodos={showActiveTodos}
            showCompletedTodos={showCompletedTodos}
            handleClearComplete={handleClearComplete}
          />
        </div>
      </div>
    </div>
  );
};
