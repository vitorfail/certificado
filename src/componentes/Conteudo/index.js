import './index.css'
import React, { useEffect, useState } from 'react'
import Cert1 from '../../certificado1.jpg'
import Cert2 from '../../certificado2.jpg'
import Cert3 from '../../certificado3.jpg'
import Cert4 from '../../certificado4.jpg'
import Cert5 from '../../certificado5.jpg'
import Seta1 from '../../icons/seta1.png'
import Seta2 from '../../icons/seta2.png'

import axios from 'axios'
import Dow from '../../dowload.png'
import Est1 from '../../estilo1.png'
import Est2 from '../../estilo2.png'
import Eng from '../../engrenagem.png'
import {  ChromePicker } from 'react-color'
import { Contexto } from '../../StoreContext'

export default function Conteudo(){
    const { setpopup_aviso} = React.useContext(Contexto)
    const [margin, setmargin]= useState(0)
    const [nome, setnome] = useState('Indefinido')
    const [execution ,setexecution] =useState(false)
    const [mostrardowload ,setmostrardowload] =useState(false)
    const [imagem, setimagem] = useState('')
    const [diretor, setdiretor] = useState(' ')
    const [reitor, setreitor] = useState(' ')
    const [data, setdata] = useState(' ')
    const [conteudo, setconteudo] = useState(' ')
    const [tipo, settipo] = useState('tipo2')
    const [instituicao, setinstituicao] = useState(' ')
    const [descri, setdescri] = useState(' ')
    const [rgb, setrgb] = useState("#37d67a");
    const [showpicker, setshowpicker] = useState(false)
    useEffect(() =>{
    })
    function hexToRgb(hex) {
        hex = hex.replace('#', '')
        var bigint = parseInt(hex, 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;
    
        return [r,g , b]
    }
    function filtroConteudo(e){
        if(e.length> 78){
            e = e.match(/.{1,78}/g)
            var c = ''
            for(var i =0; i<e.length;i++){
                c = c+'\n'+e[i]
            }
            console.log(c)
            return c
        }
        else{
            return e
        }
    }
    function mostrarpicker(){
        if(showpicker){
            setshowpicker(false)
        }
        else{
            setshowpicker(true)
        }
    }
    function criar_imagem(){
        setexecution(true)
        setmostrardowload(false)
        axios.post('https://back-certificado.herokuapp.com/', {nome:nome,
        diretor:diretor,
        reitor:reitor,
        data:data,
        conteudo:filtroConteudo(conteudo),
        instituicao:instituicao,
        descri: descri,
         tipo:tipo,
        rgb:hexToRgb(rgb)},
        {responseType: 'blob'})
        .then(res => {
            const url = res.data
            const imageurl = URL.createObjectURL(url);
            setexecution(false)
            setimagem(imageurl)
            setmostrardowload(true)
        })
        .catch(err => {
            setexecution(false)
            setpopup_aviso(true)
            console.log('passou aqui')
        })
    }
    function passar_esquerda(){
        if(margin < 960){
            setmargin(margin+480)
        }
    }
    function passar_direito(){
        if(margin > -960){
            setmargin(margin-480)
        }
    }
    return(
        <div className='conteudo'>
            <div className='comeco'>
                <h1>Certificado Maker</h1>
                <h3>Crie  seus certificado de maneira r??pida e com qualidade.
                     Nossa ferramente pode fazer quantidades consider??veis de certificados em v??rios nomes.</h3>
            </div>
            <div className='estilo'>
                    <img alt='style' src={Est2}></img>
                    <img alt='style' src={Est1}></img>
            </div>
            <div className='lista-modelos'>
                <div className='seta1' onClick={() => passar_esquerda()}>
                    <img  src={Seta2}></img>
                </div>
                <div className='seta2' onClick={() => passar_direito()}>
                    <img  src={Seta1}></img>
                </div>
                <div className='container-modelos' style={{marginLeft:margin+'px'}}>
                    <button className='modelo' onClick={() => settipo('tipo1')} 
                        style={{background:'url('+Cert1+')', 
                        backgroundPosition:'center', 
                        backgroundRepeat:'no-repeat', 
                        backgroundSize:'cover'}}>
                    </button>
                    <button className='modelo' onClick={() => settipo('tipo2')} 
                        style={{background:'url('+Cert2+')', 
                        backgroundPosition:'center', 
                        backgroundRepeat:'no-repeat', 
                        backgroundSize:'cover'}} alt='Certificado3'>
                    </button>
                    <button className='modelo' onClick={() => settipo('tipo3')} 
                        style={{background:'url('+Cert4+')', 
                        backgroundPosition:'center', 
                        backgroundRepeat:'no-repeat', 
                        backgroundSize:'cover'}} alt='Certificado3'>
                    </button>
                    <button className='modelo' onClick={() => settipo('tipo4')} 
                        style={{background:'url('+Cert3+')', 
                        backgroundPosition:'center', 
                        backgroundRepeat:'no-repeat', 
                        backgroundSize:'cover'}} alt='Certificado3'>
                    </button>
                    <button className='modelo' onClick={() => settipo('tipo5')} 
                        style={{background:'url('+Cert5+')', 
                        backgroundPosition:'center', 
                        backgroundRepeat:'no-repeat', 
                        backgroundSize:'cover'}} alt='Certificado3'>
                    </button>
                </div>
            </div>
            <div className='estilo'>
                    <img alt='style' src={Est2}></img>
                    <img alt='style' src={Est1}></img>
            </div>
            <div className='montagem'>
                <div className='descri'>
                    <div className='box'>
                        <h3>Formando: </h3>
                        <div className='linha'>
                            <input onChange={(event) => setnome(event.target.value)} placeholder='Jos?? manoel'></input>
                        </div>
                    </div>
                    <div className='box'>
                        <h3>Diretor: </h3>
                        <div className='linha'>
                            <input onChange={(event) => setdiretor(event.target.value)} placeholder='Critino alfonso'></input>
                        </div>
                    </div>
                    <div className='box'>
                        <h3>Reitor: </h3>
                        <div className='linha'>
                            <input onChange={(event) => setreitor(event.target.value)} placeholder='Alberto calisto'></input>
                        </div>
                    </div>
                    <div className='box'>
                        <h3>Conteudo: </h3>
                        <div className='linha'>
                            <input onChange={(event) => setconteudo(event.target.value)} placeholder='Foi devidamente formado em...'></input>
                        </div>
                    </div>
                    <div className='box'>
                        <h3>Data: </h3>
                        <div className='linha'>
                            <input onChange={(event) => setdata(event.target.value)} placeholder='12/02/2020'></input>
                        </div>
                    </div>
                    <div className='box'>
                        <h3>Institui????o: </h3>
                        <div className='linha'>
                            <input onChange={(event) => setinstituicao(event.target.value)} placeholder='Centro Adatuo bezeera...'></input>
                        </div>
                    </div>
                    <div className='box'>
                        <h3>Descri????o da institui????o: </h3>
                        <div className='linha'>
                            <input onChange={(event) => setdescri(event.target.value)} placeholder='E.E.i ...'></input>
                        </div>
                    </div>
                    <div className='box'>
                        <h1>Escolha a cor:</h1>
                        <h4 className='selecionarRgb' onClick={() => mostrarpicker()}><div style={{background:rgb}} className='cor'></div>{rgb}</h4>
                    </div>
                    <div className={showpicker? 'colorpicker show':'colorpicker'}>
                        <ChromePicker color={rgb} height='80px' width='100%' onChange={(color) => setrgb(color.hex)} />
                    </div>
                    <div>
                        <button onClick={() => criar_imagem()} className='criar'>Gerar imagem</button>
                    </div> 
                </div>
                <div className='container' >
                    <div className='principal' alt="perfil2" style={{backgroundImage:'url('+imagem+')', backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'cover'}}>
                        <div  className={execution? 'loading show': 'loading'}>
                            <img alt='eng' src={Eng}></img>
                            <h2>Aguarde. Estamos criando o certificado......</h2>
                        </div>
                        <a href={imagem} className={mostrardowload? 'dowload show': 'dowload'} download='certificado.jpg'>
                            <img alt='dowload' src={Dow}></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}