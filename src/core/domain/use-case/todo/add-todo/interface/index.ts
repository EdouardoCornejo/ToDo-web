import { ReduxDispatch, TodoDto } from "../../../..";


export interface AddTodoUseCaseProps extends ReduxDispatch {
    createTodo: TodoDto;
}