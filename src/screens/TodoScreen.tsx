import React, {useState} from "react";
import {Button} from "react-native"
import styled from "styled-components/native";
import {THEME} from "../theme"
import {AppCard} from "../components/ui/AppCard";
import {EditModal} from "../components/EditModal";

type TodoScreenPropsType = {
    goBack: () => void
    todo: any
    onRemove: (id: string) => void
    onSave: any
}

export const TodoScreen: React.FC<TodoScreenPropsType> = ({goBack, todo, onRemove, onSave}) => {

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
                    <Button title={"Change"} onPress={() => {
                        setModal(true);
                    }}/>
                </AppCard>
            </Card>
            <ButtonGroup>
                <ButtonWrapper>
                    <Button color={THEME.GREY_COLOR} title={"go Back"} onPress={goBack}/>
                </ButtonWrapper>
                <ButtonWrapper>
                    <Button color={THEME.DANGER_COLOR} title={"delete"} onPress={() => onRemove(todo.id)}/>
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
  width: 46%;
`
const Title = styled.Text`
  font-size: 20px;
`
const Card = styled.View`
  margin-bottom: 20px;
  padding: 15px;
`