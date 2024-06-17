import * as Redux from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { FetchControl, TodoItem } from "../../../../../../domain";

interface InitialTodoState {
  todos: TodoItem[];
  originalTodos: TodoItem[];
  fetchControl: FetchControl;
}

const initialFetchControl: FetchControl = {
  isLoading: false,
  error: false,
  errorMessage: "",
};

const initialState: InitialTodoState = {
  todos: [],
  originalTodos: [],
  fetchControl: initialFetchControl,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodos: (state, { payload }: Redux.PayloadAction<TodoItem[]>) => {
      state.originalTodos = payload;
      state.todos = payload;
    },
    getTodos: (state, { payload }: Redux.PayloadAction<TodoItem[]>) => {
      state.todos = payload;
    },

    addTodo: (state, { payload }: Redux.PayloadAction<TodoItem>) => {
      state.todos = [...state.todos, payload];
    },

    updateTodo: (state, { payload }: Redux.PayloadAction<TodoItem>) => {
      const todos = state.todos.map((todo) => {
        if (todo.id === payload.id) {
          return payload 
        }
        return todo;
      });
      state.todos = todos;
    },

    deleteTodo: (state, { payload }: Redux.PayloadAction<string>) => {
      const todos = state.todos.filter((todo) => todo.id !== payload);
      state.todos = todos;
    },

    deleteAllTodos: (state) => {
      state.todos = [];
    },

    setIsLoading: (state, { payload }: Redux.PayloadAction<boolean>) => {
      state.fetchControl.isLoading = payload;
    },

    setErrorState: (
      state,
      { payload }: Redux.PayloadAction<{ message: string }>
    ) => {
      state.fetchControl.error = true;
      state.fetchControl.errorMessage = payload?.message;
    },

    resetErrorState: (state) => {
      state.fetchControl.error = false;
      state.fetchControl.errorMessage = "";
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  getTodos,
  deleteAllTodos,
  resetErrorState,
  setErrorState,
  setIsLoading,
  updateTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
