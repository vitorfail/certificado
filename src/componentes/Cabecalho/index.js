import './index.css'
import React, { useEffect, useState } from 'react'
import Eng from '../../engrenagem.png'

export default function Cabecalho(){
    const [header, setheader] = useState(false)
    useEffect(() => {
        const rolagem = () =>{
            if(window.scrollY> 10){
                setheader(true)
            }
            else{
                setheader(false)
            }
        }
        window.addEventListener("scroll", rolagem)
        return () => {
          window.removeEventListener("scroll", rolagem)
        }
    })
    return(
        <header>
            <div className='selo'>
                <div className={header? 'gira rodar': 'gira'}>
                    <img src={Eng}></img>
                </div>
            </div>
        </header>
    )
}