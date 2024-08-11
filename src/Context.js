import { useState } from 'react';
import {createContext, useReducer} from 'react';

export const themeContext = createContext();

const initialState = {darkmode: false};

const theheReducer = (state, action) => {
    switch(action.type){
        case 'toggle':
            return {darkmode: !state.darkmode}
            default:
                return state;
    }
};

export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(theheReducer, initialState);
    return (
        <themeContext.Provider value={{state, dispatch}}>
            {props.children}
        </themeContext.Provider>
    ); 
};
