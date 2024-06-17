import { TodoIdDto, UpdateTodoDto } from "../../../../dto";
import { ReduxDispatch } from "../../../../interface";


export interface UpdateTodoUseCaseProps extends ReduxDispatch {
    updateTodoDto: UpdateTodoDto & TodoIdDto
}