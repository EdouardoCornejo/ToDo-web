import {
  setErrorState,
  setLogin,
} from "../../../../presentation/store/core/slices/auth";
import { JWT } from "../../../adapters/jwt";
import { Jwt } from "../../../interface/auth";
import { GenericUseCase } from "../../../interface/use-case";
import { SetSessionUseCaseProps } from "./interface";

export class setSessionUseCase
  implements GenericUseCase<SetSessionUseCaseProps, void>
{
  async execute({
    dispatch,
    sessionDto,
  }: SetSessionUseCaseProps): Promise<void> {
    const { token } = sessionDto;

    if (!token.length) {
      dispatch(
        setErrorState({
          message: "there was an error signing in, please try again.",
        })
      );
      return;
    }

    const decoded = JWT.decoded<Jwt>(token);

    dispatch(
      setLogin({
        ...decoded,
        token,
      })
    );
  }
}
