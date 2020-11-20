import React from "react";
import App, {TodosType} from "../App";
import {Provider, useSelector} from "react-redux";
import {AppRootStateType, store} from "./store/store";

export const AppWrapper = () => {

    const todolists = useSelector<AppRootStateType, Array<TodosType>>(state => state.todolist)

    return (
        <Provider store={store}>
            <App arrayTodolists={todolists}/>
        </Provider>
    )
}