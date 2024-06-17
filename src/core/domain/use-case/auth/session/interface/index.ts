import { SessionDto } from "../../../../dto";
import { ReduxDispatch } from "../../../../interface/use-case";

export interface SetSessionUseCaseProps extends ReduxDispatch {
    sessionDto: SessionDto;
}