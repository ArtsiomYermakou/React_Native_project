import React, {useState} from "react";
import {Alert, Button, Modal, TextInput} from "react-native";
import styled from "styled-components/native";
import {THEME} from "../theme"
import {AppButton} from "./ui/AppButton";

type EditModalPropsType = {
    visible: boolean
    onCancel: () => void
    value: any
    onSave: any
}

export const EditModal: React.FC<EditModalPropsType> = ({onCancel, visible, value, onSave}) => {

    const [title, setTitle] = useState(value);

    const saveHandler = () => {
        if (title.trim().length < 3) {
            Alert.alert("Error!", `minimal length name 3 symbols. Now ${title.trim().length} symbols!`)
        } else {
            onSave(title);
        }
    }
    return (
        <Modal visible={visible} animationType={"slide"} transparent={false}>
            <Wrapper>
                <CustomInput value={title} onChangeText={setTitle} maxLength={64} autoCorrect={false}
                             autoCapitalize={"none"} placeholder={"Enter name"}/>
                <ButtonGroup>
                    <AppButton color={THEME.DANGER_COLOR} onPress={() => {
                        onCancel()
                    }}>Cancel</AppButton>
                    <AppButton onPress={saveHandler}>Save</AppButton>
                </ButtonGroup>
            </Wrapper>
        </Modal>
    )
}

const Wrapper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const CustomInput = styled.TextInput`
    padding: 10px;
    border-bottom-color: ${THEME.MAIN_COLOR};
    border-bottom-width: 2px;
    width: 80%;
`
const ButtonGroup = styled.View`
    width: 100%;
    margin-top: 10px;
    flex-direction: row;
    justify-content:space-around;
`