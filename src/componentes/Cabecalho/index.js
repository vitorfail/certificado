import './index.css'
import React, { useEffect, useState } from 'react'
import Eng from '../../engrenagem.png'

export default function Cabecalho(){
    const [header, setheader] = useState(false)
    const [rotation, setrotation] = useState(0)
    useEffect(() => {
        const checarScroll = () =>{
            setrotation(rotation+6)
  
          }  
        const rolagem = () =>{
            setrotation(rotation+6)

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
                <div className={ 'gira'}>
                    <img style={{transform:'rotateZ('+rotation+'deg)'}} src={Eng}></img>
                </div>
            </div>
        </header>
    )
}