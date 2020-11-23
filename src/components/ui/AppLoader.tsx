import React from "react";
import styled from "styled-components/native";
import {ActivityIndicator} from "react-native"
import {THEME} from "../../theme";

export const AppLoader = () => {
    return (
        <Center>
            <ActivityIndicator size={"large"} color={THEME.MAIN_COLOR}/>
        </Center>
    )
}

const Center = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;