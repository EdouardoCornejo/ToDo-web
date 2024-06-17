/* eslint-disable @typescript-eslint/no-explicit-any */
import { AddTodoEntity, GenericUseCase } from "../../..";
import { AddTodoMapper } from "../../../../infraestructure/mapper/todos/todo/add-todo.mapper";
import { coreApi } from "../../../../presentation/store/core/api";
import {
  addTodo,
  resetErrorState,
  setErrorState,
  setIsLoading,
} from "../../../../presentation/store/core/slices/todo/slice/todo.slice";
import { AddTodoUseCaseProps } from "./interface";

export class AddTodoUseCase
  implements GenericUseCase<AddTodoUseCaseProps, void>
{
  async execute({ createTodo, dispatch }: AddTodoUseCaseProps): Promise<void> {
    dispatch(resetErrorState());
    dispatch(setIsLoading(true));

    try {
      const { data } = (await dispatch(
        coreApi.endpoints.addTodo.initiate(createTodo)
      ).unwrap()) as AddTodoEntity;

      AddTodoMapper.toEntity(data);

      dispatch(addTodo(data));
    } catch (error: any) {
      dispatch(setErrorState({ message: error }));
    } finally {
      dispatch(setIsLoading(false));
    }
  }
}
