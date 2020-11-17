import React from "react";
import styled from "styled-components/native";

type AppCardPropsType = {
    children: React.ReactNode
}

export const AppCard: React.FC<AppCardPropsType> = ({children}) => {
    return <ContainerDefault>
        {children}
    </ContainerDefault>
}

const ContainerDefault = styled.View`
      padding: 20px;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      border-radius: 10px;
      elevation: 10;
`