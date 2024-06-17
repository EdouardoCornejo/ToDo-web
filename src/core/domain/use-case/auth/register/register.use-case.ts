/* eslint-disable @typescript-eslint/no-explicit-any */
import { notification } from "antd";
import { RegisterMapper } from "../../../../infraestructure/mapper/auth/register/register.mapper";
import { coreApi } from "../../../../presentation/store/core/api";
import {
  resetErrorState,
  setErrorState,
  setIsLoading,
} from "../../../../presentation/store/core/slices/auth";
import { RegisterEntity } from "../../../entity";
import { GenericUseCase } from "../../../interface/use-case";
import { RegisterUseCaseProps } from "./interface";

export class RegisterUseCase
  implements GenericUseCase<RegisterUseCaseProps, void>
{
  public async execute({
    dispatch,
    register,
  }: RegisterUseCaseProps): Promise<void> {
    dispatch(setIsLoading(true));
    dispatch(resetErrorState());

    try {
      const { data } = (await dispatch(
        coreApi.endpoints.register.initiate(register)
      ).unwrap()) as RegisterEntity;

      RegisterMapper.toEntity(data);
    } catch (error: any) {
      dispatch(setErrorState({ message: error }));
      notification.error({
        message: "Error",
        description: `The user did not register, check the data.`,
      });
    } finally {
        dispatch(setIsLoading(false));
      }
  }
}
