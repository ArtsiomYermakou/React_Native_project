import React, {useState} from "react";
import {Alert, Keyboard} from "react-native";
import styled from "styled-components/native";
import {THEME} from "../theme";
import {AntDesign} from '@expo/vector-icons';

type AddTodoPropsType = {
    onSubmit: (title: string) => void
}

const AddTodo: React.FC<AddTodoPropsType> = ({onSubmit}) => {

    const [value, setValue] = useState("")

    const pressHandler = () => {
        if (value) {
            onSubmit(value.trim());
            setValue("")
            Keyboard.dismiss();
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
            <AntDesign.Button name={"pluscircle"} onPress={pressHandler}>Add</AntDesign.Button>
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