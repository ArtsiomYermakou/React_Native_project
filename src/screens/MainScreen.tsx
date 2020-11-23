import React, {useEffect, useState} from "react";
import {Dimensions, FlatList, View} from "react-native"
import AddTodo from "../components/AddTodo";
import Todo from "../components/Todo";
import styled from "styled-components/native";
import {THEME} from "../theme";
import {TodosType} from "../../AppChild";
import {AppLoader} from "../components/ui/AppLoader";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {AppButton} from "../components/ui/AppButton";


type MainScreenPropsType = {
    addTodo: (title: string) => void
    todos: Array<TodosType>
    removeTodo: (id: string) => void
    openTodo: (id: string) => void
    fetchTodos: () => void
}

export const MainScreen: React.FC<MainScreenPropsType> = ({openTodo, addTodo, todos, fetchTodos}) => {

    const [deviceWidth, setDeviceWidth] = useState(Dimensions.get("window").width - THEME.PADDING_HORIZONTAL * 2)

    const loading = useSelector<AppRootStateType, boolean>(
        state => state.todolist["loading"]
    )

    const error = useSelector<AppRootStateType, string>(
        state => state.todolist["error"]
    )

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

    if (loading) {
        return <AppLoader/>
    }

    if (error) {
        return <Center>
            <Error>{error}</Error>
            <AppButton onPress={fetchTodos}>Repeat</AppButton>
        </Center>
    }

    return (
        <>
            <AddTodo onSubmit={addTodo}/>
            {content}
        </>
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

const Center = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
const Error = styled.Text`
  font-size: 20px;
  color: ${THEME.DANGER_COLOR};
`