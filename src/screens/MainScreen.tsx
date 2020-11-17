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

export const MainScreen: React.FC<MainScreenPropsType> = ({openTodo, addTodo, todos, removeTodo}) => {
    return (
        <View>
            <AddTodo onSubmit={addTodo}/>
            <FlatList
                keyExtractor={item => item.id.toString()}
                data={todos}
                renderItem={({item}) => (<Todo onOpen={openTodo} todolist={item} onRemove={removeTodo}/>)}
            />
        </View>
    )
}