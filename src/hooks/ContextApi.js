import { createContext, useReducer } from "react";
import { reducer } from "./useReducer";

export const contextCr = createContext("hello")
const initialStatete={
    product:[]
}
export const ContextCompoenet = ({children})=>{
    const [state,dispatch] = useReducer(reducer,initialStatete)
    
    return <contextCr.Provider value={{ state,dispatch }}>
        {children}
    </contextCr.Provider>
}