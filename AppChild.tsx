import React, {useCallback, useEffect, useState} from 'react';
import {Alert, ScrollView} from 'react-native';
import {NavBar} from "./src/components/Navbar";
import {MainScreen} from "./src/screens/MainScreen";
import {TodoScreen} from "./src/screens/TodoScreen";
import styled from 'styled-components/native';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./src/store/store";

import {addTodolistTC, deleteTodolistTC, getTodolistTC, updateTodolistTC} from "./src/reducers/todolistReducer";

export type TodosType = {
    id: string
    title: string
}

export default function AppChild() {

    const dispatch = useDispatch();

    useEffect(() => {
        fetchTodos()
    }, [])

    const arrayTodolists = useSelector<AppRootStateType, Array<TodosType>>(
        state => state.todolist["todos"]
    )

    const fetchTodos = useCallback(() => {
        dispatch(getTodolistTC())
    }, [1000])

    const [todoId, setTodoId] = useState<string | null>(null);

    const addTodo = (title: string) => {
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
                        dispatch(deleteTodolistTC(id))
                    }
                }
            ],
            {cancelable: false}
        );
    }

    const updateTodo = (id: string, title: string) => {
        dispatch(updateTodolistTC(id, title))
    }

    let content = <MainScreen
        openTodo={(id: any) => {
            setTodoId(id)
        }}
        addTodo={addTodo}
        todos={arrayTodolists}
        removeTodo={removeTodo}
        fetchTodos={fetchTodos}
    />

    if (todoId) {
        const selectedTodo = arrayTodolists.find(todo => todo.id === todoId)
        content =
            <TodoScreen onSave={updateTodo} onRemove={removeTodo}
                        todo={selectedTodo} goBack={() => setTodoId(null)}/>
    }

    return (
        <AppChildWrapper>
            <NavBar title={"Todo App"}/>
            <AppContainer>
                <ScrollView>
                    {content}
                </ScrollView>
            </AppContainer>
        </AppChildWrapper>

    );
}

const AppChildWrapper = styled.View`
  flex: 1;
`;
const AppContainer = styled.View`
  padding: 30px;
  flex: 1;
`;