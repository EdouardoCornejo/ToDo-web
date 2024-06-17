/* eslint-disable @typescript-eslint/no-explicit-any */
import { coreApi } from "../../../../presentation/store/core/api";
import {
  deleteAllTodos,
  resetErrorState,
  setErrorState,
  setIsLoading,
} from "../../../../presentation/store/core/slices/todo/slice/todo.slice";
import { GenericUseCase, ReduxDispatch } from "../../../interface";

export class DeleteAllTodosUseCase
  implements GenericUseCase<ReduxDispatch, void>
{
  async execute({ dispatch }: ReduxDispatch): Promise<void> {
    dispatch(setIsLoading(true));
    dispatch(resetErrorState());

    try {
      (await dispatch(
        coreApi.endpoints.deleteTodos.initiate({})
      ).unwrap()) as void;

      dispatch(deleteAllTodos());
      
    } catch (error: any) {
      dispatch(setErrorState({ message: error }));
    } finally {
      dispatch(setIsLoading(false));
    }
  }
}
