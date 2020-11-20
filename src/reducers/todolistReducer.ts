import {ActionTypes} from "../store/store";
import {TodosType} from "../../AppChild";

type InitialStateType = typeof InitialState;

const InitialState = {
    todos: [] as Array<TodosType>,
    loading: false,
    error: null,
}

export const todolistReducer = (state: InitialStateType = InitialState, action: ActionTypes) => {
    switch (action.type) {
        case "ADD_TODOLIST":
            const newTodo = {id: action.id, title: action.title};
            return {
                ...state,
                todos: [...state.todos, newTodo]
            }
        case "REMOVE_TODOLIST":
            return {
                ...state,
                todos: state.todos.filter(t => t.id !== action.id)
            };
        case "UPDATE_TODOLIST": {
            return {
                ...state,
                todos: state.todos.map((todo: TodosType) => {
                        if (todo.id === action.id) {
                            todo.title = action.title
                        }
                        return todo;
                    }
                )
            }
        }
        case "SHOW_LOADER": {
            return {...state, loading: true}
        }
        case "HIDE_LOADER": {
            return {...state, loading: false}
        }
        case "CLEAR_ERROR": {
            return {...state, error: null}
        }
        case "SHOW_ERROR": {
            return {...state, error: action.error}
        }
        case "FETCH_TODOS": {
            return {...state.todos}
        }
        default: {
            return state;
        }
    }
}

export const addTodolistAC = (id: string, title: string) => (
    {type: "ADD_TODOLIST", id, title} as const
)
export const deleteTodolistAC = (id: string) => (
    {type: "REMOVE_TODOLIST", id} as const
)
export const updateTodolistAC = (id: string, title: string) => (
    {type: "UPDATE_TODOLIST", id, title} as const
)
export const showLoaderAC = (loading: boolean) => (
    {type: "SHOW_LOADER", loading} as const
)
export const hideLoaderAC = (loading: boolean) => (
    {type: "HIDE_LOADER", loading} as const
)
export const clearErrorAC = () => (
    {type: "CLEAR_ERROR"} as const
)
export const showErrorAC = (error: string) => (
    {type: "SHOW_ERROR", error} as const
)
export const fetchTodosAC = ({todos: {}}) => (
    {type: "FETCH_TODOS"} as const
)

export type addTodolistActionType = ReturnType<typeof addTodolistAC>
export type deleteTodolistActionType = ReturnType<typeof deleteTodolistAC>
export type updateTodolistActionType = ReturnType<typeof updateTodolistAC>
export type showLoaderActionType = ReturnType<typeof showLoaderAC>
export type hideLoaderActionType = ReturnType<typeof hideLoaderAC>
export type clearErrorActionType = ReturnType<typeof clearErrorAC>
export type showErrorActionType = ReturnType<typeof showErrorAC>
export type fetchTodosActionType = ReturnType<typeof fetchTodosAC>