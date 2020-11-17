import React, {useState} from "react";
import {Button, Alert} from "react-native";
import styled from "styled-components/native";
import {THEME} from "../theme";

type AddTodoPropsType = {
    onSubmit: (title: string) => void
}

const AddTodo: React.FC<AddTodoPropsType> = ({onSubmit}) => {

    const [value, setValue] = useState("")

    const pressHandler = () => {
        if (value) {
            onSubmit(value.trim());
            setValue("")
        } else {
            Alert.alert("Enter Value")
        }
    }

    const changeText = (text: string) => {
        setValue(text)
    }

    return (
        <Block>
            <Input onChangeText={changeText} value={value}
                   placeholder={"Enter Todolist name"} autoCorrect={false} autoCapitalize={"none"}/>
            <Button title={"Add"} onPress={pressHandler}/>
        </Block>
    )
}

const Block = styled.View`
        flexDirection: row;
        justifyContent: space-between;
        alignItems: center;
        marginBottom: 15px;
`

const Input = styled.TextInput`
      width: 74%;
      padding: 10px;
      border-style: solid;
      border-bottom-width: 2px;
      border-bottom-color: ${THEME.MAIN_COLOR};
`

export default AddTodo;