/* eslint-disable @typescript-eslint/no-explicit-any */
import { UpdateTodoMapper } from "../../../../infraestructure/mapper/todos/todo/update-todo.mapper";
import { coreApi } from "../../../../presentation/store/core/api";
import {
  resetErrorState,
  setErrorState,
  setIsLoading,
  updateTodo,
} from "../../../../presentation/store/core/slices/todo/slice/todo.slice";
import { UpdateTodoEntity } from "../../../entity";
import { GenericUseCase } from "../../../interface";
import { UpdateTodoUseCaseProps } from "./interface";

export class UpdateTodoUseCase
  implements GenericUseCase<UpdateTodoUseCaseProps, void>
{
  async execute({
    updateTodoDto,
    dispatch,
  }: UpdateTodoUseCaseProps): Promise<void> {
    dispatch(resetErrorState());
    dispatch(setIsLoading(true));
    try {
      const { data } = (await dispatch(
        coreApi.endpoints.updateTodo.initiate(updateTodoDto)
      ).unwrap()) as UpdateTodoEntity;

      UpdateTodoMapper.toEntity(data);

      dispatch(updateTodo(data));
    } catch (error: any) {
      dispatch(setErrorState({ message: error }));
    } finally {
      dispatch(setIsLoading(false));
    }
  }
}
