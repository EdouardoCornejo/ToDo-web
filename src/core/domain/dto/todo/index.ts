export interface TodoDto {
  title: string;
  date: string;
}

export interface TodoIdDto {
  id: string;
}

export interface TodoUpdateDto extends TodoDto {
  id: string;
}

export interface UpdateTodoDto  {
  completed?: boolean;
  title?: string;
  date?: string;
}
