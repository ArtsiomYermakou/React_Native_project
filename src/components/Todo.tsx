import React from "react";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import {TodosType} from "../../App";

type PropsType = {
    todolist: TodosType
    onRemove: (id: string) => void
    onOpen: (id: string) => void
}

const Todo = (props: PropsType) => {

    const longPressHandler = () => {
        props.onRemove(props.todolist.id)
    }

    return (
        <TouchableOpacity activeOpacity={0.5} onPress={() => props.onOpen(props.todolist.id)} onLongPress={longPressHandler}>
            <View style={styles.todo}>
                <Text>{props.todolist.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        borderWidth: 1,
        borderColor: "#eee",
        borderRadius: 5,
        marginBottom: 10
    }
})

export default Todo;