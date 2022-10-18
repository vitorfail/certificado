import './index.css'
import React from 'react'
import { Contexto } from '../../StoreContext'

export default function PopupNome(){
    const {nome, setnome, popup_nome, setpopup_nome} = React.useContext(Contexto)
    return(
        <div className={popup_nome? 'popup-nome show': 'popup-nome'} >
            <div className='popup-nome--menu'>
                <h2>Adicionar nome</h2>
                <div>
                    <div>
                        <input placeholder='João'></input>
                        <button className='adicionar'></button>
                    </div>
                </div>
                <div className='popup-nome--botoes'>
                    <button className='popup-nome--ok'>OK</button>
                    <button className='popup-nome--cancel' onClick={() => setpopup_nome(false)}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}