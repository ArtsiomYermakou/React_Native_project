import React, {useState} from 'react';
import {View} from 'react-native';
import {NavBar} from "./src/components/Navbar";
import {MainScreen} from "./src/screens/MainScreen";
import {TodoScreen} from "./src/screens/TodoScreen";
import styled from 'styled-components/native';

export type TodosType = {
    id: string
    title: string
}

export default function App() {
    const [todoId, setTodoId] = useState<string | null>("2");
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
        setTodos(prevState => prevState.filter(t => t.id !== id))
    }

    let content =
        <MainScreen
            openTodo={(id: any) => {
                setTodoId(id)
            }}
            addTodo={addTodo}
            todos={todos}
            removeTodo={removeTodo}
        />

    if (todoId) {
        const selectedTodo = todos.find(todo => todo.id === todoId)
        content = <TodoScreen todo={selectedTodo} goBack={() => setTodoId(null)}/>
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