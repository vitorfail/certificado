import React, { useState } from "react";

export const Contexto = React.createContext({})

export const StoreProvider = (props) =>{
    const [ nome, setnome]= useState(['Exemplo, Exemplo'])
    const [popup_nome, setpopup_nome] = useState(false)
    return(
        <Contexto.Provider value={{nome, setnome, popup_nome, setpopup_nome}}>
            {props.children}
        </Contexto.Provider>
    )
}