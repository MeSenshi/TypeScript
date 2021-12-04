import {FetchTodoAction, DeleteTodoAction} from "./todos";

export enum Types {
    fetchTodos,
    deleteTodo
}

export type Action = FetchTodoAction | DeleteTodoAction;