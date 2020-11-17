import React from "react";
import {FlatList, View} from "react-native"
import AddTodo from "../components/AddTodo";
import Todo from "../components/Todo";
import {TodosType} from "../../App";

type MainScreenPropsType = {
    addTodo: (title: string) => void
    todos: Array<TodosType>
    removeTodo: (id: string) => void
    openTodo: (id: string) => void
}

export const MainScreen = (props: MainScreenPropsType) => {
    return (
        <View>
            <AddTodo onSubmit={props.addTodo}/>
            <FlatList
                keyExtractor={item => item.id.toString()}
                data={props.todos}
                renderItem={({item}) => (<Todo onOpen={props.openTodo} todolist={item} onRemove={props.removeTodo}/>)}
            />
        </View>
    )
}