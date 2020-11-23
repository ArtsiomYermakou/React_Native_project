import axios from "axios"

const settings = {}
const instance = axios.create({
    baseURL: `https://react-native-testapi.firebaseio.com/todos/`,
    ...settings
})

// api

export type AddTodolistType = {
    title: string
}

export const API = {
    addTodolist(data: AddTodolistType) {
        return instance.post(".json", data);
    },
    getTodolists() {
        return instance.get(".json");
    },
    updateTodo(id: string, title: string) {
        return instance.put(`${id}.json`, {title});
    },
    deleteTodolist(id: string) {
        return instance.delete(`${id}.json`)
    }
}