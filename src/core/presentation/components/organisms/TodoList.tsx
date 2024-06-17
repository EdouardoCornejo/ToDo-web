import { FC } from "react";
import Todo from "./Todo";
import TodoFilters from "./TodoFilters";
import { TodoListProps } from "../../../domain/interface";

const TodoList: FC<TodoListProps> = ({
  todos,
  activeFilter,
  handleSetComplete,
  handleDelete,
  handleClearComplete,
  showAllTodos,
  showActiveTodos,
  showCompletedTodos,
}) => {
  return (
    <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            handleSetComplete={handleSetComplete}
          />
        );
      })}

      {/* Passing props to the TodoFilters component. */}
      <TodoFilters
        activeFilter={activeFilter}
        total={todos.length}
        showAllTodos={showAllTodos}
        showActiveTodos={showActiveTodos}
        showCompletedTodos={showCompletedTodos}
        handleClearComplete={handleClearComplete}
      />
    </div>
  );
};

export default TodoList;
