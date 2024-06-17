import { z } from "zod";
export const todoSchema = z.array(
  z.object({
    id: z.string(),
    title: z.string(),
    date: z.string(),
    completed: z.boolean(),
    userId: z.string(),
  })
);


export const singleTodoSchema =  z.object({
  id: z.string(),
  title: z.string(),
  date: z.string(),
  completed: z.boolean(),
  userId: z.string(),
})