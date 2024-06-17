import { TodoItem } from "../entity";

export interface TodoProps {
  todo: TodoItem;
  handleSetComplete: (id: string, completed: boolean) => void;
  handleDelete: (id: string) => void;
}

export interface TodoListProps {
  todos: TodoItem[];
  activeFilter: string;
  handleSetComplete: (id: string, completed: boolean) => void;
  handleDelete: (id: string) => void;
  handleClearComplete: () => void;
  showAllTodos: () => void;
  showActiveTodos: () => void;
  showCompletedTodos: () => void;
}

export interface TodoInputProps {
  addTodo: (title: string, date: string) => void;
}

export interface TodoFiltersProps {
  total: number;
  activeFilter: string;
  showAllTodos: () => void;
  showActiveTodos: () => void;
  showCompletedTodos: () => void;
  handleClearComplete: () => void;
}

export type FilterTodoProps ='all'| 'active'| 'completed'

