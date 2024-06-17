/* eslint-disable @typescript-eslint/no-explicit-any */
import { TodoDto, TodoIdDto, TodoItem, UpdateTodoDto } from "../../../../../../domain"
import { HttpMethod } from "../../../../../../domain/interface/http"
import { TodoMapper } from "../../../../../../infraestructure"
import { ApiEndpointBuilder } from "../../../api"
import { getTodos, resetErrorState, setErrorState, setIsLoading } from "../slice/todo.slice"

enum TodoEndpoints {
    todos = '/todo',
}

export const tagTypesTodo = ['Todo']

export const todoEndpoints = (builder: ApiEndpointBuilder) => ({
    getTodos: builder.query({
        query: () => ({
            url: TodoEndpoints.todos,
            method: HttpMethod.GET,
        }),
        providesTags: tagTypesTodo,

        async onQueryStarted(_,{dispatch, queryFulfilled}){
            dispatch(resetErrorState());
            dispatch(setIsLoading(true));
        try{

            const {
                data: { data:todo },
              } = (await queryFulfilled) as {
                data: { data: Array<TodoItem> };
              };

              TodoMapper.toEntity(todo);
        
              dispatch(getTodos(todo));
            } catch (error: any) {
              dispatch(setErrorState({ message: error }));
            } finally {
              dispatch(setIsLoading(false));
            }
        }
        
    }),

    addTodo: builder.mutation({
        query: (data: TodoDto) => ({
            url: TodoEndpoints.todos,
            method: HttpMethod.POST,
            data
        }),
        // invalidatesTags: tagTypesTodo
    }),

    updateTodo: builder.mutation({
        query: ({ id, ...data }: UpdateTodoDto & TodoIdDto) => ({
            url: `${TodoEndpoints.todos}/${id}`,
            method: HttpMethod.PUT,
            data,
        }),
        // invalidatesTags: tagTypesTodo
    }),

    deleteTodoById: builder.mutation({
        query: ({ id }: TodoIdDto) => ({
            url: `${TodoEndpoints.todos}/${id}`,
            method: HttpMethod.DELETE,
        }),
        // invalidatesTags: tagTypesTodo
    }),

    deleteTodos: builder.mutation({
        query: () => ({
            url: TodoEndpoints.todos,
            method: HttpMethod.DELETE,
        }),
        // invalidatesTags: tagTypesTodo

    }),
})


