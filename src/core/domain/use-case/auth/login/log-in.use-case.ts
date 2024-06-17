/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  resetErrorState,
  setErrorState,
  setIsLoading,
  startLogin,
} from "../../../../presentation/store/core/slices/auth";
import { GenericUseCase } from "../../../interface/use-case";
import { LoginUseCaseProps } from "./interface";
import { coreApi } from "../../../../presentation/store/core/api";
import { LoginEntity } from "../../../entity";
import { LoginMapper } from "../../../../infraestructure";
import { setSessionUseCase } from "../session/session.use-case";

export class LoginUseCase implements GenericUseCase<LoginUseCaseProps, void> {
  async execute({ dispatch, navigate, loginDto }: LoginUseCaseProps) {
    dispatch(startLogin());
    dispatch(setIsLoading(true));
    dispatch(resetErrorState());

    try {
      const { data } = (await dispatch(
        coreApi.endpoints.login.initiate(loginDto)
      ).unwrap()) as LoginEntity;

      LoginMapper.toEntity(data);

      new setSessionUseCase().execute({
        dispatch,
        sessionDto: {
          token: data?.token.toString() || "",
        },
      });

      navigate("/app");

    } catch (error: any) {
      dispatch(setErrorState({ message: error ?? "" }));
    } finally {
      dispatch(setIsLoading(false));
    }
  }
}
