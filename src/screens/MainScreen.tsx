import React, {useEffect, useState} from "react";
import {Dimensions, FlatList, View} from "react-native"
import AddTodo from "../components/AddTodo";
import Todo from "../components/Todo";
import styled from "styled-components/native";
import {THEME} from "../theme";
import {TodosType} from "../../AppChild";

type MainScreenPropsType = {
    addTodo: (title: string) => void
    todos: Array<TodosType>
    removeTodo: (id: string) => void
    openTodo: (id: string) => void
}

export const MainScreen: React.FC<MainScreenPropsType> = ({openTodo, addTodo, todos}) => {

    const [deviceWidth, setDeviceWidth] = useState(Dimensions.get("window").width - THEME.PADDING_HORIZONTAL * 2)

    useEffect(() => {
        const update = () => {
            const width = Dimensions.get("window").width - THEME.PADDING_HORIZONTAL * 2;
            setDeviceWidth(width)
        }
        Dimensions.addEventListener("change", update);
        return () => {
            Dimensions.removeEventListener("change", update);
        }
    })


    let content = <View style={{width: deviceWidth}}>
        <FlatList
            keyExtractor={item => item.id.toString()}
            data={todos}
            renderItem={({item}) => (<Todo onOpen={openTodo}
                                           todolist={item}
            />)}
        />
    </View>

    if (todos.length === 0) {
        content = <ImageWrapper>
            <ImageCustom source={require("../../assets/no-items.png")}/>
        </ImageWrapper>
    }

    return (
        <View>
            <AddTodo onSubmit={addTodo}/>
            {content}
        </View>
    )
}

const ImageWrapper = styled.View`
  align-items: center;
  justify-content: center;
  padding: 10px;
  height: 300px;
`

const ImageCustom = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: contain;
`