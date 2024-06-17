import { TodoItem, UpdateTodoEntity } from "../../../../domain";
import { singleTodoSchema } from "../schema";

export class UpdateTodoMapper {
    public static toEntity(data: TodoItem): UpdateTodoEntity {
        const {...todos} = singleTodoSchema.parse(data);

        return todos as unknown as UpdateTodoEntity;
     }
}