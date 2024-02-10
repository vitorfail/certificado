import React, { useEffect, useState } from 'react';

import './index.css'
export default function Confete(props){
    const conf = [0, 0, 0, ,0 ,0 ,0 ,0 ,0 , 0,0 ,0, 0, 0,0 ,0,0 ,0,0 ,0 ,0,0, 0,0, 0, ,0 ,0 ,0 , 0, 0, 0, 0, 0, 0, 0, 0, 0, ]
    const [inicio, setinicio] = useState(true)
    useEffect(() => {
        setTimeout(()=> {
            setinicio(false)
        },4000)
    })
    function numeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    function numero(){
        return Math.floor(Math.random() * (50 - (-34) + 1) + (-34));
    }
    function corAleatoria() {
        // Gerar valores aleatórios para Red, Green e Blue
        var red = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);
      
        // Construir a string da cor RGB
        var cor = "rgb(" + red + ", " + green + ", " + blue + ")";
      
        return cor;
    }
    return(
        <div style={{display:props.show, width:props.largura+"px",height:props.largura+"px"}}  className="campo">
            <div className='confete'>
                <div className={inicio?"lista show":"lista"} >
                    {conf.map((item, key) => (
                        <i key={key} style={{transform:"translateX("+numeroAleatorio(112, -145)+"px) rotate("+numeroAleatorio(12, -145)+"deg) rotate("+numeroAleatorio(12, -145)+"deg) rotate("+numeroAleatorio(12, -145)+"deg)","--i":numeroAleatorio(12, 45), background:corAleatoria()}}></i>
                    ))}
                </div>
            </div>
        </div>
    )
}