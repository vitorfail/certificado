import React from 'react'
import { Contexto } from '../../StoreContext'
import './index.css'

export default function PopupAviso(){
    const {popup_aviso, setpopup_aviso} = React.useContext(Contexto)
    return(
        <div className={popup_aviso?'popup-aviso show': "popup-aviso"}>
            <div className='menu'>
                <h3>Infelizmento o serviço não está mais disponível. O Beckend estava armazenado na Heroku, um servidor gratuito da amazon.
                    Porém a licensa gratuita expirou. No momento este projeto não funciona. Sinto muito .......</h3>
                <button onClick={() => setpopup_aviso(false)}>OK</button>
            </div>
        </div>
    )
}