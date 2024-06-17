import { LoginDto } from "../../../../dto";
import {  ReduxDispatchAndNavigate } from "../../../../interface/use-case";


export interface LoginUseCaseProps extends ReduxDispatchAndNavigate {
    loginDto: LoginDto;
  }