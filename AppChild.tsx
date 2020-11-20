import React, {useState} from 'react';
import {Alert, ScrollView} from 'react-native';
import {NavBar} from "./src/components/Navbar";
import {MainScreen} from "./src/screens/MainScreen";
import {TodoScreen} from "./src/screens/TodoScreen";
import styled from 'styled-components/native';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./src/store/store";
import {
    addTodolistAC,
    clearErrorAC,
    deleteTodolistAC,
    hideLoaderAC,
    showErrorAC,
    showLoaderAC,
    updateTodolistAC
} from "./src/reducers/todolistReducer";

export type TodosType = {
    id: string
    title: string
}

export default function AppChild() {
    const dispatch = useDispatch();
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

        const response = await fetch("https://react-native-testapi.firebaseio.com/todos.json", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({title})
        })
        const data = await response.json()
        dispatch(addTodolistAC(data.name, title))

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