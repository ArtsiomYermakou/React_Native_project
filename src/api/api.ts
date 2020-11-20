import axios from "axios"
import {TodosType} from "../../AppChild";

const settings = {}
const instance = axios.create({
    baseURL: 'https://react-native-testapi.firebaseio.com/todos.json',
    ...settings
})

// api

export type AddTodolist = {
    title: string
}


export const API = {
    addTodolist(data: AddTodolist) {
        return instance.post("", {data});
    },
    getTodolists() {
        return instance.get<Array<TodosType>>("")
    }
    // me(){
    //     const promise = instance.get<ResponseType<AuthMeType>>("auth/me");
    //     return promise;
    // },
    // logout(){
    //     const promise = instance.delete<ResponseType>("/auth/login")
    //     return promise
    // }
}