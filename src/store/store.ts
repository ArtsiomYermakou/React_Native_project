import {combineReducers, createStore} from "redux";
import {
    addTodolistActionType, clearErrorActionType,
    deleteTodolistActionType, fetchTodosActionType, hideLoaderActionType, showErrorActionType, showLoaderActionType,
    todolistReducer,
    updateTodolistActionType
} from "../reducers/todolistReducer";

const reducers = combineReducers({
    todolist: todolistReducer,
});

export const store = createStore(reducers);

export type AppRootStateType = ReturnType<typeof reducers>;

export type ActionTypes = addTodolistActionType
    | deleteTodolistActionType
    | updateTodolistActionType
    | showLoaderActionType
    | hideLoaderActionType
    | clearErrorActionType
    | showErrorActionType
    | fetchTodosActionType;