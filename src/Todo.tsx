import React from "react";
import {View, StyleSheet, Text} from "react-native";
import {TodosType} from "../App";

type PropsType = {
    todolist: TodosType
}

const Todo = (props: PropsType) => {
    return (
        <View style={styles.todo}>
            <Text>{props.todolist.title}</Text>
        </View>
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