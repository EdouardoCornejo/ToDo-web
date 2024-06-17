import { todoSchema } from "../schema";
import { GetTodosEntity, TodoItem } from "../../../../domain/entity";

export class TodoMapper {
  public static toEntity(data: TodoItem[]): GetTodosEntity {
    const [...todos] = todoSchema.parse(data);

    return todos as unknown as GetTodosEntity;
  }
}
