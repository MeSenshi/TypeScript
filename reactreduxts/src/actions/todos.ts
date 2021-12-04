import axios from 'axios';
import {Dispatch} from "redux";
import {Types} from "./types";

export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export interface FetchTodoAction {
    type: Types.fetchTodos;
    payload: Todo[];
}

export interface DeleteTodoAction {
    type: Types.deleteTodo;
    payload: number;
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        const res = await axios.get<Todo[]>(url);

        dispatch<FetchTodoAction>({
            type: Types.fetchTodos,
            payload: res.data
        })
    }
};

export const deleteTodo = (id: number): DeleteTodoAction => {
    return {
        type: Types.deleteTodo,
        payload: id
    }
};

