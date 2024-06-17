import { RegisterDto } from "../../../../dto";
import { ReduxDispatch } from "../../../../interface/use-case";

export interface RegisterUseCaseProps extends ReduxDispatch {
    register: RegisterDto;
}