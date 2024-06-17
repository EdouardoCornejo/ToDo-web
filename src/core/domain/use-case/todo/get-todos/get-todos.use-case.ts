
import { coreApi } from "../../../../presentation/store/core/api";
import { GetTodosEntity } from "../../../entity";
import { GenericUseCase, ReduxDispatch } from "../../../interface";

export class GetTodosUseCase implements GenericUseCase<ReduxDispatch, void> {
  async execute({ dispatch }: ReduxDispatch): Promise<void> {
  (await dispatch(
        coreApi.endpoints.getTodos.initiate({})
      ).unwrap()) as GetTodosEntity;
  }
}
