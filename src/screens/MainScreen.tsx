import React from "react";
import {FlatList, StyleSheet, View} from "react-native"
import AddTodo from "../components/AddTodo";
import Todo from "../components/Todo";
import {TodosType} from "../../App";

type MainScreenPropsType = {
    addTodo: (title: string) => void
    todos: Array<TodosType>
    removeTodo: (id: string) => void
}

const MainScreen = (props: MainScreenPropsType) => {
    return (
        <View>
            <AddTodo onSubmit={props.addTodo}/>
            <FlatList
                keyExtractor={item => item.id.toString()}
                data={props.todos}
                renderItem={({item}) => (<Todo todolist={item} onRemove={props.removeTodo}/>)}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default MainScreen;

