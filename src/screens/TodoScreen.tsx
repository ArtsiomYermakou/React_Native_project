import React from "react";
import {StyleSheet, View, Text, Button} from "react-native"
import {TodosType} from "../../App";

type TodoScreenPropsType = {
    goBack: () => void
    todo: any
}

const TodoScreen = (props: TodoScreenPropsType) => {
    return (
        <View>
            <Text>{props.todo.title}</Text>
            <Button title={"go Back"} onPress={props.goBack}/>
        </View>
    )
}

const styles = StyleSheet.create({})

export default TodoScreen;
