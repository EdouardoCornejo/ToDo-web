export interface TodoItem {
  id: string;
  title: string;
  date: string;
  completed: boolean;
  userId: string;
}

export interface GetTodosEntity {
  data: TodoItem[];
}

export interface AddTodoEntity {
  data: TodoItem;
}

export interface UpdateTodoEntity {
  data: TodoItem;
}

export interface DeleteTodoEntity {
  data: TodoItem;
}