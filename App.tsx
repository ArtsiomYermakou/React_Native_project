import React from 'react';
import AppChild from "./AppChild";
import {Provider} from "react-redux";
import {store} from "./src/store/store";


export default function App() {
    return (
        <Provider store={store}>
            <AppChild />
        </Provider>
    )

}