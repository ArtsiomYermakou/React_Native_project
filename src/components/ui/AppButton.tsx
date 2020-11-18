import { Text, TouchableOpacity, View} from "react-native";
import styled from "styled-components/native";
import React from "react";
import {THEME} from "../../theme";

type AppButtonPropsType = {
    children: React.ReactNode
    onPress?: () => void
    color?: string
}

export const AppButton: React.FC<AppButtonPropsType> = ({color = THEME.MAIN_COLOR, onPress, children}) => {

    return (
        <TouchableOpacity onPress={onPress}>
            <ButtonAppButton style={{backgroundColor: color}}>
                <Text style={{color: "#fff"}}>{children}</Text>
            </ButtonAppButton>
        </TouchableOpacity>
    )
}

const ButtonAppButton = styled.View`
  padding: 10px 20px;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

