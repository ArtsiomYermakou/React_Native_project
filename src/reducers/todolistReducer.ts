import {ActionTypes} from "../store/store";
import {TodosType} from "../../AppChild";
import {Dispatch} from "redux";
import {API} from "../api/api";


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
                // todos: state.todos.map((todo: TodosType) => {
                //         if (todo.id === action.title) {
                //             todo.title = action.title
                //         }
                //         return todo;
                //     }
                // )
            }
        }
        case "IS_LOADER": {
            return {...state, loading: action.loading}
        }
        case "CLEAR_ERROR": {
            return {...state, error: null}
        }
        case "SHOW_ERROR": {
            return {...state, error: action.error}
        }
        case "FETCH_TODOS": {
            return {...state, todos: action.todos}
        }
        default: {
            return state;
        }
    }
}

//AC
export const addTodolistAC = (id: string, title: string) => (
    {type: "ADD_TODOLIST", id, title} as const
)
export const deleteTodolistAC = (id: string) => (
    {type: "REMOVE_TODOLIST", id} as const
)
export const updateTodolistAC = (title: string) => (
    {type: "UPDATE_TODOLIST", title} as const
)
export const isLoaderAC = (loading: boolean) => (
    {type: "IS_LOADER", loading} as const
)
export const clearErrorAC = () => (
    {type: "CLEAR_ERROR"} as const
)
export const showErrorAC = (error: string) => (
    {type: "SHOW_ERROR", error} as const
)
export const fetchTodosAC = (todos: any) => (
    {type: "FETCH_TODOS", todos} as const
)

//TC

export const addTodolistTC = (title: string) => {
    return (dispatch: Dispatch) => {
        API.addTodolist({title})
            .then(res => {
                const id = res.data.name;
                dispatch(addTodolistAC(id, title));
            })
    }
}

export const getTodolistTC = () => {
    return (dispatch: Dispatch) => {
        dispatch(isLoaderAC(true));
        API.getTodolists()
            .then(res => {
                const todos = Object.keys(res.data).map(key => ({...res.data[key], id: key}));
                dispatch(fetchTodosAC(todos));
            })
            .catch(error => {
                dispatch(showErrorAC(`${error}`));
            })
            .finally(() => dispatch(isLoaderAC(false)));
    }
}

export const updateTodolistTC = (id: string, title: string) => {
    return (dispatch: Dispatch) => {
        API.updateTodo(id, title)
            .then(res => {
                dispatch(updateTodolistAC(res.data))
            })
    }
}

export const deleteTodolistTC = (id: string) => {
    return (dispatch: Dispatch) => {
        API.deleteTodolist(id)
            .then(res => dispatch(deleteTodolistAC(id)))
    }
}

export type addTodolistActionType = ReturnType<typeof addTodolistAC>
export type deleteTodolistActionType = ReturnType<typeof deleteTodolistAC>
export type updateTodolistActionType = ReturnType<typeof updateTodolistAC>
export type isLoaderActionType = ReturnType<typeof isLoaderAC>
export type clearErrorActionType = ReturnType<typeof clearErrorAC>
export type showErrorActionType = ReturnType<typeof showErrorAC>
export type fetchTodosActionType = ReturnType<typeof fetchTodosAC>