import React from "react";
import styled from "styled-components/native";
import {THEME} from "../theme"

type NavBarPropsType = {
    title: string
}

export const NavBar: React.FC<NavBarPropsType> = ({title}) => {
    return (
        <Navbar>
            <TextBlock>{title}</TextBlock>
        </Navbar>
    )
}

const Navbar = styled.View`
        height: 70px;
        align-items: center;
        justify-content: flex-end;
        background-color: ${THEME.MAIN_COLOR};
        padding-bottom: 10px;
`
const TextBlock = styled.Text`
        color: white;
        font-size: 20px;
`