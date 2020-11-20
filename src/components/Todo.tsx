import React from "react";
import {TouchableOpacity} from "react-native";
import {TodosType} from "../../App";
import styled from "styled-components/native";

type TodoPropsType = {
    todolist: TodosType
    onRemove?: (id: string) => void
    onOpen: (id: string) => void
}

export const Todo: React.FC<TodoPropsType> = ({onOpen, todolist, onRemove}) => {

    // const longPressHandler = () => {
    //     onRemove(todolist.id)
    // }

    return (
        <TouchableOpacity activeOpacity={0.5}
                          onPress={() => onOpen(todolist.id)}
                          onLongPress={() => {}}>
            <TodoContainer>
                <TextTitle>{todolist.title}</TextTitle>
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
const TextTitle = styled.Text`
        
`

export default Todo;