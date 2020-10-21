import React, {useState} from "react";
import {View, StyleSheet, TextInput, Button, Alert} from "react-native";

type PropsType = {
    onSubmit: (title: string) => void
}

const AddTodo = (props: PropsType) => {

    const [value, setValue] = useState("")

    const pressHandler = () => {
        if (value) {
            props.onSubmit(value.trim());
            setValue("")
        } else {
            Alert.alert("Enter Value")
        }
    }

    const changeText = (text: string) => {
        setValue(text)
    }

    return (
        <View style={styles.block}>
            <TextInput style={styles.input} onChangeText={changeText} value={value}
                       placeholder={"Enter Todolist name"} autoCorrect={false} autoCapitalize={"none"} />
            <Button title={"Add"} onPress={pressHandler}/>
        </View>
    )
}


const styles = StyleSheet.create({
    block: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15
    },
    input: {
        width: "74%",
        padding: 10,
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderBottomColor: "#3949ab"
    }
})

export default AddTodo;