import { DeleteTodoEntity, TodoItem } from "../../../../domain";
import { singleTodoSchema } from "../schema";

export class DeleteTodoMapper {
    public static toEntity(data: TodoItem): DeleteTodoEntity {
        const {...todos} = singleTodoSchema.parse(data);

        return todos as unknown as DeleteTodoEntity;
     }
}