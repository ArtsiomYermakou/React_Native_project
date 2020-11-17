import React from "react";
import {Text, Button} from "react-native"
import styled from "styled-components/native";
import {THEME} from "../theme"
import {AppCard} from "../components/ui/AppCard";
import {TodosType} from "../../App";

type TodoScreenPropsType = {
    goBack: () => void
    todo: any
}

export const TodoScreen: React.FC<TodoScreenPropsType> = ({goBack, todo}) => {
    return (
        <>
            <Card>
                <AppCard>
                    <Title>{todo.title}</Title>
                    <Button title={"Change"} onPress={() => {
                    }}/>
                </AppCard>
            </Card>
            <ButtonGroup>
                <ButtonWrapper>
                    <Button color={THEME.GREY_COLOR} title={"go Back"} onPress={goBack}/>
                </ButtonWrapper>
                <ButtonWrapper>
                    <Button color={THEME.DANGER_COLOR} title={"delete"} onPress={() => console.log(`To Remove`)}/>
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