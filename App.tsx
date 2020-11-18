import React, {useState} from 'react';
import {Alert, View} from 'react-native';
import {NavBar} from "./src/components/Navbar";
import {MainScreen} from "./src/screens/MainScreen";
import {TodoScreen} from "./src/screens/TodoScreen";
import styled from 'styled-components/native';

export type TodosType = {
    id: string
    title: string
}

export default function App() {
    const [todoId, setTodoId] = useState<string | null>(null);
    const [todos, setTodos] = useState<Array<TodosType>>([
        {id: "1", title: "React"},
        {id: "2", title: "TypeScript"},
        {id: "3", title: "JavaScript"},
    ]);

    const addTodo = (title: string) => {
        setTodos((prev: Array<TodosType>) => [...prev, {
            id: Date.now().toString(), title
        }])
    }

    const removeTodo = (id: string) => {
        const todoEl = todos.find(t => t.id === id)
        Alert.alert(
            "Element delete",
            `You sure "${todoEl?.title}" delete?`,
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
                        setTodos(prevState => prevState.filter(t => t.id !== id))
                    }
                }
            ],
            {cancelable: false}
        );
    }

    const updateTodo = (id: string, title: string) => {
        setTodos((prev: any) => prev.map((todo: TodosType) => {
            if (todo.id === id) {
                todo.title = title
            }
            return todo;
        }))
    }

    let content = <MainScreen
        openTodo={(id: any) => {
            setTodoId(id)
        }}
        addTodo={addTodo}
        todos={todos}
        removeTodo={removeTodo}
    />

    if (todoId) {
        const selectedTodo = todos.find(todo => todo.id === todoId)
        content =
            <TodoScreen onSave={updateTodo} onRemove={removeTodo} todo={selectedTodo} goBack={() => setTodoId(null)}/>
    }

    return (
        <View>
            <NavBar title={"Todo App"}/>
            <AppContainer>
                {content}
            </AppContainer>
        </View>
    );
}

const AppContainer = styled.View`
      padding: 30px;
`