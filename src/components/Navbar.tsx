import React from "react";
import {Text, View, StyleSheet} from "react-native";
import styled from "styled-components/native";

type PropsType = {
    title: string
}

export const NavBar = (props: PropsType) => {
    return (
        <Navbar>
            <TextBlock>{props.title}</TextBlock>
        </Navbar>
    )
}

const Navbar = styled.View`
        height: 70px;
        align-items: center;
        justify-content: flex-end;
        background-color: #3949ab;
        padding-bottom: 10px;
`
const TextBlock = styled.Text`
        color: white;
        font-size: 20px;
`