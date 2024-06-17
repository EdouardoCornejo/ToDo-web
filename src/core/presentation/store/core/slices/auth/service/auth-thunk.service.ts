import { NavigateFunction } from "react-router";
import { LoginDto, RegisterDto } from "../../../../../../domain";
import { LoginUseCase } from "../../../../../../domain/use-case";
import { RegisterUseCase } from "../../../../../../domain/use-case/auth/register/register.use-case";
import { AppDispatch } from "../../../../store";
import { resetErrorState } from "../slice";

class AuthThunkService {
  public constructor() {}

  public finallyThunk(dispatch: AppDispatch) {
    dispatch(resetErrorState());
  }

  public loginThunk({
    email,
    password,
    navigate,
  }: { navigate: NavigateFunction } & LoginDto): (
    dispatch: AppDispatch
  ) => Promise<void> {
    return (dispatch: AppDispatch) =>
      new LoginUseCase().execute({
        loginDto: { email, password },
        navigate,
        dispatch,
      });
  }

  public registerThunk(
    register: RegisterDto
  ): (dispatch: AppDispatch) => Promise<void> {
    return (dispatch: AppDispatch) =>
      new RegisterUseCase().execute({
        register,
        dispatch,
      });
  }
}

export const authThunkService = new AuthThunkService();
