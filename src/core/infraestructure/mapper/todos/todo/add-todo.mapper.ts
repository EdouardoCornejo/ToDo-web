import { AddTodoEntity, TodoItem } from "../../../../domain";
import { singleTodoSchema } from "../schema";

export class AddTodoMapper {
    public static toEntity(data: TodoItem): AddTodoEntity {
        const {...todos} = singleTodoSchema.parse(data);

        return todos as unknown as AddTodoEntity;
    }
}