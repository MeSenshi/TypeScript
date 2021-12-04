import {Todo, Action, Types} from "../actions";

export const todosReducer = (state: Todo[] = [], action: Action) => {
    switch (action.type) {
        case Types.fetchTodos:
            return action.payload;
        case Types.deleteTodo:
            return state.filter((todo: Todo) =>
                todo.id !== action.payload
            );
        default:
            return state;
    }
};