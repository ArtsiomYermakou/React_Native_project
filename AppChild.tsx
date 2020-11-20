import React, {useEffect, useState} from 'react';
import {Alert, ScrollView} from 'react-native';
import {NavBar} from "./src/components/Navbar";
import {MainScreen} from "./src/screens/MainScreen";
import {TodoScreen} from "./src/screens/TodoScreen";
import styled from 'styled-components/native';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./src/store/store";

import {
    addTodolistTC,
    clearErrorAC,
    deleteTodolistAC,
    getTodolistsAC,
    hideLoaderAC,
    showErrorAC,
    showLoaderAC,
    updateTodolistAC
} from "./src/reducers/todolistReducer";
import {API} from "./src/api/api";

export type TodosType = {
    id: string
    title: string
}

export default function AppChild() {

    const dispatch = useDispatch();

    useEffect(() => {
        API.getTodolists()
            .then(res => {
                dispatch(getTodolistsAC(res.data))
            })
    }, [])


    const arrayTodolists = useSelector<AppRootStateType, Array<TodosType>>(
        state => state.todolist["todos"]
    )

    const showLoader = () => {
        dispatch(showLoaderAC(true))
    }
    const hideLoader = () => {
        dispatch(hideLoaderAC(false))
    }

    const showError = (error: string) => {
        dispatch(showErrorAC(error))
    }
    const clearError = () => {
        dispatch(clearErrorAC())
    }

    const [todoId, setTodoId] = useState<string | null>(null);

    const addTodo = async (title: string) => {
        dispatch(addTodolistTC(title))
    }

    const removeTodo = (id: string) => {
        Alert.alert(
            "Element delete",
            `You sure delete  ?`,
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: () => {
                        setTodoId(null)
                        dispatch(deleteTodolistAC(id))
                    }
                }
            ],
            {cancelable: false}
        );
    }

    const updateTodo = (id: string, title: string) => {
        dispatch(updateTodolistAC(id, title))
    }

    let content = <MainScreen
        openTodo={(id: any) => {
            setTodoId(id)
        }}
        addTodo={addTodo}
        todos={arrayTodolists}
        removeTodo={removeTodo}
    />

    if (todoId) {
        const selectedTodo = arrayTodolists.find(todo => todo.id === todoId)
        content =
            <TodoScreen onSave={updateTodo} onRemove={removeTodo} todo={selectedTodo} goBack={() => setTodoId(null)}/>
    }

    return (
        <>
            <NavBar title={"Todo App"}/>
            <ScrollView>
                <AppContainer>
                    {content}
                </AppContainer>
            </ScrollView>
        </>

    );
}

const AppContainer = styled.View`
      padding: 30px;
`