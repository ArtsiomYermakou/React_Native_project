import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NavBar from "./src/Navbar";
import AddTodo from "./src/AddTodo";
import Todo from "./src/Todo";

export type TodosType = {
    id: string
    title: string
}

export default function App() {
    const [todos, setTodos] = useState<Array<TodosType>>([]);

    const addTodo = (title: string) => {
        setTodos((prev: Array<TodosType>) => [...prev, {
            id: Date.now().toString(), title
        }])
    }

    return (
        <View>
            <NavBar title={"Todo App"}/>
            <View style={styles.container}>
                <AddTodo onSubmit={addTodo}/>

                <View>
                    {todos.map((todos: TodosType) => <Todo key={todos.id} todolist={todos}/>
                    )}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20
    }
});
