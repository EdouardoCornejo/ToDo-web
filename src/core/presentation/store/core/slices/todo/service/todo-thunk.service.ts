import { resetErrorState } from "../slice/todo.slice";
import {
  AddTodoUseCase,
  DeleteAllTodosUseCase,
  DeleteTodoByIdUseCase,
  GetTodosUseCase,
  TodoDto,
  TodoIdDto,
  UpdateTodoDto,
  UpdateTodoUseCase,
} from "../../../../../../domain";
import { AppDispatch } from "../../../../store";
import { FilteredTodosUseCase } from "../../../../../../domain/use-case/todo/filtered-todos/filtered-todos.use-case";

class TodoThunkService {
  public constructor() {}

  public finallyThunk(dispatch: AppDispatch) {
    dispatch(resetErrorState());
  }

  public getTodosThunk(): (dispatch: AppDispatch) => Promise<void> {
    return (dispatch: AppDispatch) =>
      new GetTodosUseCase().execute({
        dispatch,
      });
  }

  public addTodoThunk({
    date,
    title,
  }: TodoDto): (dispatch: AppDispatch) => Promise<void> {
    return (dispatch: AppDispatch) =>
      new AddTodoUseCase().execute({
        dispatch,
        createTodo: {
          title,
          date,
        },
      });
  }

  public updateTodoThunk(
    updateTodoDto: UpdateTodoDto & TodoIdDto
  ): (dispatch: AppDispatch) => Promise<void> {
    return (dispatch: AppDispatch) =>
      new UpdateTodoUseCase().execute({
        updateTodoDto,
        dispatch,
      });
  }

  public deleteAllTodosThunk(): (dispatch: AppDispatch) => Promise<void> {
    return (dispatch: AppDispatch) =>
      new DeleteAllTodosUseCase().execute({
        dispatch,
      });
  }

  public deleteTodoThunk(
    todoIdDto: TodoIdDto
  ): (dispatch: AppDispatch) => Promise<void> {
    return (dispatch: AppDispatch) =>
      new DeleteTodoByIdUseCase().execute({
        dispatch,
        todoIdDto,
      });
  }

  public filterTodos(filter: string): (dispatch: AppDispatch) => void {
    return (dispatch: AppDispatch) =>
      new FilteredTodosUseCase().execute({
        dispatch,
        filter,
      });
  }
}

export const todoThunkService = new TodoThunkService();
