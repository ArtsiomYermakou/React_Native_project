import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import NavBar from "./src/components/Navbar";
import MainScreen from "./src/screens/MainScreen";
import TodoScreen from "./src/screens/TodoScreen";

export type TodosType = {
    id: string
    title: string
}

export default function App() {
    const [todoId, setTodoId] = useState(null);
    const [todos, setTodos] = useState<Array<TodosType>>([
        {id: "1", title: "Artem test 1"},
        {id: "2", title: "Artem test 2"},
        {id: "3", title: "Artem test 4"},
    ]);

    const addTodo = (title: string) => {
        setTodos((prev: Array<TodosType>) => [...prev, {
            id: Date.now().toString(), title
        }])
    }

    const removeTodo = (id: string) => {
        setTodos(prevState => prevState.filter(t => t.id !== id))
    }

    let content = <MainScreen
        openTodo={(id: any) => {setTodoId(id)}}
        addTodo={addTodo}
        todos={todos}
        removeTodo={removeTodo}
    />

    if (todoId) {
        const selectedTodo = todos.find((todo) => todo.id === todoId)
        content = <TodoScreen todo={selectedTodo} goBack={() => setTodoId(null)}/>
    }

    return (
        <ScrollView>
            <NavBar title={"Todo App"}/>
            <View style={styles.container}>
                {content}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20
    }
});
