import React from "react";
import { Text, TouchableOpacity} from "react-native";
import {TodosType} from "../../App";
import styled from "styled-components/native";

type PropsType = {
    todolist: TodosType
    onRemove: (id: string) => void
    onOpen: (id: string) => void
}

export const Todo = (props: PropsType) => {

    const longPressHandler = () => {
        props.onRemove(props.todolist.id)
    }

    return (
        <TouchableOpacity activeOpacity={0.5}
                          onPress={() => props.onOpen(props.todolist.id)}
                          onLongPress={longPressHandler}>
            <TodoContainer>
                <Text>{props.todolist.title}</Text>
            </TodoContainer>
        </TouchableOpacity>
    )
}

const TodoContainer = styled.View`
        flex-direction: row;
        align-items: center;
        padding: 15px;
        border-width: 1px;
        border-color: #eee;
        border-radius: 5px;
        margin-bottom: 10px;
`

export default Todo;