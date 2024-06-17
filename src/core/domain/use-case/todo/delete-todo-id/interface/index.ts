import { TodoIdDto } from "../../../../dto";
import { ReduxDispatch } from "../../../../interface";

export interface DeleteTodoByIdUseCaseProps extends ReduxDispatch{
    todoIdDto: TodoIdDto
}