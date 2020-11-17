import React from "react";
import {Text, Button} from "react-native"
import styled from "styled-components/native";

type TodoScreenPropsType = {
    goBack: () => void
    todo: any
}

export const TodoScreen = (props: TodoScreenPropsType) => {
    return (
        <>
            <Text>{props.todo.title}</Text>
            <ButtonGroup>
                <ButtonWrapper>
                    <Button color={"#757575"} title={"go Back"} onPress={props.goBack}/>
                </ButtonWrapper>
                <ButtonWrapper>
                    <Button color={"#e53935"} title={"delete"} onPress={() => console.log(`To Remove`)}/>
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