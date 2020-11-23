import {applyMiddleware, combineReducers, createStore} from "redux";
import {
    addTodolistActionType,
    clearErrorActionType,
    deleteTodolistActionType,
    fetchTodosActionType,
    isLoaderActionType,
    showErrorActionType,
    todolistReducer,
    updateTodolistActionType
} from "../reducers/todolistReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    todolist: todolistReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof reducers>;

export type ActionTypes = addTodolistActionType
    | deleteTodolistActionType
    | updateTodolistActionType
    | isLoaderActionType
    | clearErrorActionType
    | showErrorActionType
    | fetchTodosActionType;