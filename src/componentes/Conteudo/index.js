import './index.css'
import React, { useState } from 'react'
import { Buffer } from 'buffer';
import Cert2 from '../../certificado2.jpg'
import Cert3 from '../../certificado3.jpg'
import Axios from '../../Axios'

export default function Conteudo(){
    const [ imagem, setimagem] = useState(<img alt="perfil2"  style={{width:'90%', height:'90%'}} src=''></img>)
    const [nome, setnome] = useState('Nada')
    const [diretor, setdiretor] = useState('Nada')
    const [reitor, setreitor] = useState('Nada')
    const [data, setdata] = useState('Nada')
    const [conteudo, setconteudo] = useState('Nada')
    const [tipo, settipo] = useState('tipo1')
    const [rgb, setrgb] = useState([0, 0,5])

    function criar_imagem(){
        Axios.post("https://Criarcertificado.vitorfail.repl.co", {nome:nome,
        diretor:diretor,
        reitor:reitor,
        data:data,
        conteudo:conteudo,
         tipo:tipo,
        rgb:rgb})
        .then(res => {
            console.log('nada')
            const Base64 = Buffer.from(res.data, "binary").toString("base64")
            setimagem(<img alt="perfil2"  src={`data:image/jpg;charset=utf-8;base64,${Base64}`}></img>)
        })
        .catch(err => {
            console.log(err)
        })
    }
    return(
        <div className='conteudo'>
            <div style={{display:'flex', justifyContent:'center' , height:'70%', width:'100%'}}>
                <div className='descri'>
                    <div className='box'>
                        <h3>Formando: </h3>
                        <div className='linha'>
                            <h4>Nome:</h4>
                            <input onChange={(event) => setnome(event.target.value)} placeholder='José Manoel'></input>
                        </div>
                        <div className='linha'>
                            <h4>Tamanho:</h4>
                            <input type='number'></input>
                        </div>
                        <div className='linha'>
                            <h4>Fonte:</h4>
                            <select>
                                <option className='BauerBodoniStd-Roman' value={"BauerBodoniStd-Roman"}>BauerBodoniStd-Roman</option>
                                <option className='BODONI BK BT BOOK ITALIC' value={"BODONI BK BT BOOK ITALIC"}>BODONI BK BT BOOK ITALIC</option>
                                <option className='BODONI BK BT BOOK' value={"BODONI BK BT BOOK"}>BODONI BK BT BOOK</option>
                                <option className='cac_champagne' value={"cac_champagne"}>cac_champagne</option>
                                <option className='Net-WT-Hilton-Script-Regular' value={"Net-WT-Hilton-Script-Regular"}>Net-WT-Hilton-Script-Regular</option>
                                <option className='Roboto-Black' value={"Roboto-Black"}>Roboto-Black</option>
                                <option className='Roboto-BlackItalic' value={"Roboto-BlackItalic"}>Roboto-BlackItalic</option>
                                <option className='Roboto-Bold' value={"Roboto-Bold"}>Roboto-Bold</option>
                                <option className='Roboto-BoldCondensed' value={"Roboto-BoldCondensed"}>Roboto-BoldCondensed</option>
                                <option className='Roboto-BoldCondensedItalic' value={"Roboto-BoldCondensedItalic"}>Roboto-BoldCondensedItalic</option>
                                <option className='Roboto-BoldItalic' value={"Roboto-BoldItalic"}>Roboto-BoldItalic</option>
                                <option className='Roboto-Condensed' value={"Roboto-Condensed"}>Roboto-Condensed</option>
                                <option className='Roboto-CondensedItalic' value={"Roboto-CondensedItalic"}>Roboto-CondensedItalic</option>
                                <option className='Roboto-Italic' value={"Roboto-Italic"}>Roboto-Italic</option>
                                <option className='Roboto-Light' value={"Roboto-Light"}>Roboto-Light</option>
                                <option className='Roboto-LightItalic' value={"Roboto-LightItalic"}>Roboto-LightItalic</option>
                                <option className='Roboto-Medium' value={"Roboto-Medium"}>Roboto-Medium</option>
                                <option className='Roboto-MediumItalic' value={"Roboto-MediumItalic"}>Roboto-MediumItalic</option>
                                <option className='Roboto-Regular' value={"Roboto-Regular"}>Roboto-Regular</option>
                                <option className='Roboto-Thin' value={"Roboto-Thin"}>Roboto-Thin</option>
                                <option className='Roboto-ThinItalic' value={"Roboto-ThinItalic"}>Roboto-ThinItalic</option>
                            </select>
                        </div>
                    </div>
                    <div className='box'>
                        <h3>Diretor: </h3>
                        <div className='linha'>
                            <h4>Nome:</h4>
                            <input onChange={(event) => setdiretor(event.target.value)} placeholder='José Manoel'></input>
                        </div>
                        <div className='linha'>
                            <h4>Tamanho:</h4>
                            <input type='number'></input>
                        </div>
                        <div className='linha'>
                            <h4>Fonte:</h4>
                            <select>
                                <option className='BauerBodoniStd-Roman' value={"BauerBodoniStd-Roman"}>BauerBodoniStd-Roman</option>
                                <option className='BODONI BK BT BOOK ITALIC' value={"BODONI BK BT BOOK ITALIC"}>BODONI BK BT BOOK ITALIC</option>
                                <option className='BODONI BK BT BOOK' value={"BODONI BK BT BOOK"}>BODONI BK BT BOOK</option>
                                <option className='cac_champagne' value={"cac_champagne"}>cac_champagne</option>
                                <option className='Net-WT-Hilton-Script-Regular' value={"Net-WT-Hilton-Script-Regular"}>Net-WT-Hilton-Script-Regular</option>
                                <option className='Roboto-Black' value={"Roboto-Black"}>Roboto-Black</option>
                                <option className='Roboto-BlackItalic' value={"Roboto-BlackItalic"}>Roboto-BlackItalic</option>
                                <option className='Roboto-Bold' value={"Roboto-Bold"}>Roboto-Bold</option>
                                <option className='Roboto-BoldCondensed' value={"Roboto-BoldCondensed"}>Roboto-BoldCondensed</option>
                                <option className='Roboto-BoldCondensedItalic' value={"Roboto-BoldCondensedItalic"}>Roboto-BoldCondensedItalic</option>
                                <option className='Roboto-BoldItalic' value={"Roboto-BoldItalic"}>Roboto-BoldItalic</option>
                                <option className='Roboto-Condensed' value={"Roboto-Condensed"}>Roboto-Condensed</option>
                                <option className='Roboto-CondensedItalic' value={"Roboto-CondensedItalic"}>Roboto-CondensedItalic</option>
                                <option className='Roboto-Italic' value={"Roboto-Italic"}>Roboto-Italic</option>
                                <option className='Roboto-Light' value={"Roboto-Light"}>Roboto-Light</option>
                                <option className='Roboto-LightItalic' value={"Roboto-LightItalic"}>Roboto-LightItalic</option>
                                <option className='Roboto-Medium' value={"Roboto-Medium"}>Roboto-Medium</option>
                                <option className='Roboto-MediumItalic' value={"Roboto-MediumItalic"}>Roboto-MediumItalic</option>
                                <option className='Roboto-Regular' value={"Roboto-Regular"}>Roboto-Regular</option>
                                <option className='Roboto-Thin' value={"Roboto-Thin"}>Roboto-Thin</option>
                                <option className='Roboto-ThinItalic' value={"Roboto-ThinItalic"}>Roboto-ThinItalic</option>
                            </select>
                        </div>
                    </div>
                    <div className='box'>
                        <h3>Reitor: </h3>
                        <div className='linha'>
                            <h4>Nome:</h4>
                            <input onChange={(event) => setreitor(event.target.value)} placeholder='José Manoel'></input>
                        </div>
                        <div className='linha'>
                            <h4>Tamanho:</h4>
                            <input type='number'></input>
                        </div>
                        <div className='linha'>
                            <h4>Fonte:</h4>
                            <select>
                                <option className='BauerBodoniStd-Roman' value={"BauerBodoniStd-Roman"}>BauerBodoniStd-Roman</option>
                                <option className='BODONI BK BT BOOK ITALIC' value={"BODONI BK BT BOOK ITALIC"}>BODONI BK BT BOOK ITALIC</option>
                                <option className='BODONI BK BT BOOK' value={"BODONI BK BT BOOK"}>BODONI BK BT BOOK</option>
                                <option className='cac_champagne' value={"cac_champagne"}>cac_champagne</option>
                                <option className='Net-WT-Hilton-Script-Regular' value={"Net-WT-Hilton-Script-Regular"}>Net-WT-Hilton-Script-Regular</option>
                                <option className='Roboto-Black' value={"Roboto-Black"}>Roboto-Black</option>
                                <option className='Roboto-BlackItalic' value={"Roboto-BlackItalic"}>Roboto-BlackItalic</option>
                                <option className='Roboto-Bold' value={"Roboto-Bold"}>Roboto-Bold</option>
                                <option className='Roboto-BoldCondensed' value={"Roboto-BoldCondensed"}>Roboto-BoldCondensed</option>
                                <option className='Roboto-BoldCondensedItalic' value={"Roboto-BoldCondensedItalic"}>Roboto-BoldCondensedItalic</option>
                                <option className='Roboto-BoldItalic' value={"Roboto-BoldItalic"}>Roboto-BoldItalic</option>
                                <option className='Roboto-Condensed' value={"Roboto-Condensed"}>Roboto-Condensed</option>
                                <option className='Roboto-CondensedItalic' value={"Roboto-CondensedItalic"}>Roboto-CondensedItalic</option>
                                <option className='Roboto-Italic' value={"Roboto-Italic"}>Roboto-Italic</option>
                                <option className='Roboto-Light' value={"Roboto-Light"}>Roboto-Light</option>
                                <option className='Roboto-LightItalic' value={"Roboto-LightItalic"}>Roboto-LightItalic</option>
                                <option className='Roboto-Medium' value={"Roboto-Medium"}>Roboto-Medium</option>
                                <option className='Roboto-MediumItalic' value={"Roboto-MediumItalic"}>Roboto-MediumItalic</option>
                                <option className='Roboto-Regular' value={"Roboto-Regular"}>Roboto-Regular</option>
                                <option className='Roboto-Thin' value={"Roboto-Thin"}>Roboto-Thin</option>
                                <option className='Roboto-ThinItalic' value={"Roboto-ThinItalic"}>Roboto-ThinItalic</option>
                            </select>
                        </div>
                    </div>
                    <div className='box'>
                        <h3>Conteudo: </h3>
                        <div className='linha'>
                            <h4>Nome:</h4>
                            <input onChange={(event) => setconteudo(event.target.value)} placeholder='José Manoel'></input>
                        </div>
                        <div className='linha'>
                            <h4>Tamanho:</h4>
                            <input type='number'></input>
                        </div>
                        <div className='linha'>
                            <h4>Fonte:</h4>
                            <select>
                                <option className='BauerBodoniStd-Roman' value={"BauerBodoniStd-Roman"}>BauerBodoniStd-Roman</option>
                                <option className='BODONI BK BT BOOK ITALIC' value={"BODONI BK BT BOOK ITALIC"}>BODONI BK BT BOOK ITALIC</option>
                                <option className='BODONI BK BT BOOK' value={"BODONI BK BT BOOK"}>BODONI BK BT BOOK</option>
                                <option className='cac_champagne' value={"cac_champagne"}>cac_champagne</option>
                                <option className='Net-WT-Hilton-Script-Regular' value={"Net-WT-Hilton-Script-Regular"}>Net-WT-Hilton-Script-Regular</option>
                                <option className='Roboto-Black' value={"Roboto-Black"}>Roboto-Black</option>
                                <option className='Roboto-BlackItalic' value={"Roboto-BlackItalic"}>Roboto-BlackItalic</option>
                                <option className='Roboto-Bold' value={"Roboto-Bold"}>Roboto-Bold</option>
                                <option className='Roboto-BoldCondensed' value={"Roboto-BoldCondensed"}>Roboto-BoldCondensed</option>
                                <option className='Roboto-BoldCondensedItalic' value={"Roboto-BoldCondensedItalic"}>Roboto-BoldCondensedItalic</option>
                                <option className='Roboto-BoldItalic' value={"Roboto-BoldItalic"}>Roboto-BoldItalic</option>
                                <option className='Roboto-Condensed' value={"Roboto-Condensed"}>Roboto-Condensed</option>
                                <option className='Roboto-CondensedItalic' value={"Roboto-CondensedItalic"}>Roboto-CondensedItalic</option>
                                <option className='Roboto-Italic' value={"Roboto-Italic"}>Roboto-Italic</option>
                                <option className='Roboto-Light' value={"Roboto-Light"}>Roboto-Light</option>
                                <option className='Roboto-LightItalic' value={"Roboto-LightItalic"}>Roboto-LightItalic</option>
                                <option className='Roboto-Medium' value={"Roboto-Medium"}>Roboto-Medium</option>
                                <option className='Roboto-MediumItalic' value={"Roboto-MediumItalic"}>Roboto-MediumItalic</option>
                                <option className='Roboto-Regular' value={"Roboto-Regular"}>Roboto-Regular</option>
                                <option className='Roboto-Thin' value={"Roboto-Thin"}>Roboto-Thin</option>
                                <option className='Roboto-ThinItalic' value={"Roboto-ThinItalic"}>Roboto-ThinItalic</option>
                            </select>
                        </div>
                    </div>
                    <div className='box'>
                        <h3>Data: </h3>
                        <div className='linha'>
                            <h4>Data:</h4>
                            <input onChange={(event) => setdata(event.target.value)} placeholder='José Manoel'></input>
                        </div>
                        <div className='linha'>
                            <h4>Tamanho:</h4>
                            <input type='number'></input>
                        </div>
                        <div className='linha'>
                            <h4>Fonte:</h4>
                            <select>
                                <option className='BauerBodoniStd-Roman' value={"BauerBodoniStd-Roman"}>BauerBodoniStd-Roman</option>
                                <option className='BODONI BK BT BOOK ITALIC' value={"BODONI BK BT BOOK ITALIC"}>BODONI BK BT BOOK ITALIC</option>
                                <option className='BODONI BK BT BOOK' value={"BODONI BK BT BOOK"}>BODONI BK BT BOOK</option>
                                <option className='cac_champagne' value={"cac_champagne"}>cac_champagne</option>
                                <option className='Net-WT-Hilton-Script-Regular' value={"Net-WT-Hilton-Script-Regular"}>Net-WT-Hilton-Script-Regular</option>
                                <option className='Roboto-Black' value={"Roboto-Black"}>Roboto-Black</option>
                                <option className='Roboto-BlackItalic' value={"Roboto-BlackItalic"}>Roboto-BlackItalic</option>
                                <option className='Roboto-Bold' value={"Roboto-Bold"}>Roboto-Bold</option>
                                <option className='Roboto-BoldCondensed' value={"Roboto-BoldCondensed"}>Roboto-BoldCondensed</option>
                                <option className='Roboto-BoldCondensedItalic' value={"Roboto-BoldCondensedItalic"}>Roboto-BoldCondensedItalic</option>
                                <option className='Roboto-BoldItalic' value={"Roboto-BoldItalic"}>Roboto-BoldItalic</option>
                                <option className='Roboto-Condensed' value={"Roboto-Condensed"}>Roboto-Condensed</option>
                                <option className='Roboto-CondensedItalic' value={"Roboto-CondensedItalic"}>Roboto-CondensedItalic</option>
                                <option className='Roboto-Italic' value={"Roboto-Italic"}>Roboto-Italic</option>
                                <option className='Roboto-Light' value={"Roboto-Light"}>Roboto-Light</option>
                                <option className='Roboto-LightItalic' value={"Roboto-LightItalic"}>Roboto-LightItalic</option>
                                <option className='Roboto-Medium' value={"Roboto-Medium"}>Roboto-Medium</option>
                                <option className='Roboto-MediumItalic' value={"Roboto-MediumItalic"}>Roboto-MediumItalic</option>
                                <option className='Roboto-Regular' value={"Roboto-Regular"}>Roboto-Regular</option>
                                <option className='Roboto-Thin' value={"Roboto-Thin"}>Roboto-Thin</option>
                                <option className='Roboto-ThinItalic' value={"Roboto-ThinItalic"}>Roboto-ThinItalic</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => criar_imagem()} className='criar'>Gerar</button>
                    </div>    
                </div>
                <div style={{margin:'9px', height:'100%', width:'60%'}}>
                    {imagem}
                </div>
            </div>
            <div style={{display:'flex', justifyContent:'center', height:'30%', width:'100%'}}>
                <img src={Cert2} alt='Certificado2'></img>
                <img src={Cert3} alt='Certificado3'></img>
            </div>
        </div>
    )
}