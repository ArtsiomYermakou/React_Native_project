import React, {useState} from "react";
import {Dimensions} from "react-native"
import styled from "styled-components/native";
import {THEME} from "../theme"
import {AppCard} from "../components/ui/AppCard";
import {EditModal} from "../components/EditModal";
import {AppButton} from "../components/ui/AppButton";
import {AntDesign, FontAwesome} from "@expo/vector-icons"
import {useDispatch} from "react-redux";
import {clearErrorAC, hideLoaderAC, showErrorAC, showLoaderAC} from "../reducers/todolistReducer";

type TodoScreenPropsType = {
    goBack: () => void
    todo: any
    onRemove: (id: string) => void
    onSave: any
}

export const TodoScreen: React.FC<TodoScreenPropsType> = ({goBack, todo, onSave, onRemove}) => {

    const [modal, setModal] = useState(false);

    const saveHandler = (title: string) => {
        onSave(todo.id, title);
        setModal(false);
    }

    return (
        <>
            <EditModal onSave={saveHandler} value={todo.title} onCancel={() => {
                setModal(false)
            }} visible={modal}/>
            <Card>
                <AppCard>
                    <Title>{todo.title}</Title>
                    <AppButton onPress={() => {
                        setModal(true);
                    }}>
                        <FontAwesome name={"edit"} size={20}/>
                    </AppButton>
                </AppCard>
            </Card>
            <ButtonGroup>
                <ButtonWrapper>
                    <AppButton color={THEME.GREY_COLOR} onPress={goBack}>
                        <AntDesign size={20} name={"back"}/></AppButton>
                </ButtonWrapper>
                <ButtonWrapper>
                    <AppButton color={THEME.DANGER_COLOR} onPress={() => onRemove(todo.id)}>
                        <FontAwesome name={"remove"} size={20}/>
                    </AppButton>
                </ButtonWrapper>
            </ButtonGroup>
        </>
    )
}

const ButtonGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`
const ButtonWrapper = styled.View`
  width: ${Dimensions.get("window").width > 400 ? 150 : 120};
`
const Title = styled.Text`
  font-size: 20px;
`
const Card = styled.View`
  margin-bottom: 20px;
  padding: 15px;
`