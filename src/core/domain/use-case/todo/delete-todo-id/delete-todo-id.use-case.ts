/* eslint-disable @typescript-eslint/no-explicit-any */
import { DeleteTodoMapper } from "../../../../infraestructure/mapper/todos/todo/delete-todo.mapper";
import { coreApi } from "../../../../presentation/store/core/api";
import {
  deleteTodo,
  setErrorState,
  setIsLoading,
} from "../../../../presentation/store/core/slices/todo/slice/todo.slice";
import { DeleteTodoEntity } from "../../../entity";
import { GenericUseCase } from "../../../interface";
import { DeleteTodoByIdUseCaseProps } from "./interface";

export class DeleteTodoByIdUseCase
  implements GenericUseCase<DeleteTodoByIdUseCaseProps, void>
{
  async execute({
    todoIdDto,
    dispatch,
  }: DeleteTodoByIdUseCaseProps): Promise<void> {
    try {
      const { data } = (await dispatch(
        coreApi.endpoints.deleteTodoById.initiate(todoIdDto)
      ).unwrap()) as DeleteTodoEntity;

      DeleteTodoMapper.toEntity(data);

      dispatch(deleteTodo(data.id));
    } catch (error: any) {
      dispatch(setErrorState({ message: error }));
    } finally {
      dispatch(setIsLoading(false));
    }
  }
}
