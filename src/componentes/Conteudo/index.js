import './index.css'
import React, { useEffect, useState } from 'react'
import Cert2 from '../../certificado2.jpg'
import Cert3 from '../../certificado3.jpg'
import Axios from '../../Axios'
import Dow from '../../dowload.png'
import Est1 from '../../estilo1.png'
import Est2 from '../../estilo2.png'
import Eng from '../../engrenagem.png'

export default function Conteudo(){
    const [ imagem, setimagem] = useState(<img  className='principal' alt="perfil2"  style={{width:'90%', height:'90%'}} src=''></img>)
    const [nome, setnome] = useState('Nada')
    const [diretor, setdiretor] = useState('Nada')
    const [reitor, setreitor] = useState('Nada')
    const [data, setdata] = useState('Nada')
    const [conteudo, setconteudo] = useState('Nada')
    const [tipo, settipo] = useState('tipo2')
    const [rgb, setrgb] = useState([0, 0,5])
    const [download, setdownload] = useState(null)
    useEffect(() =>{
    })
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
    function criar_imagem(){
        const tag = <div  className='loading'>
            <img alt='eng' src={Eng}></img>
        </div>
        setdownload(tag)
        Axios.post("https://Criarcertificado.vitorfail.repl.co", {nome:nome,
        diretor:diretor,
        reitor:reitor,
        data:data,
        conteudo:filtroConteudo(conteudo),
         tipo:tipo,
        rgb:rgb},
        {responseType: 'blob'})
        .then(res => {
            console.log("Minha experiência de trabalho fez de mim mais resolutivo e proativo. Tendo que".length)
            const url = res.data
            const imageurl = URL.createObjectURL(url);
            const aTag = <a href={imageurl} download='certificado.jpg'>
                <img alt='dowload' src={Dow}></img>
            </a>
            setdownload(aTag)
            setimagem(<img className='principal' alt="perfil2"  src={imageurl}></img>)
        })
        .catch(err => {
            console.log(err)
        })
    }
    return(
        <div className='conteudo'>
            <div className='comeco'>
                <h1>Certificado Maker</h1>
                <h3>Crie  seus certificado de maneira rápida e com qualidade.
                     Nossa ferramente pode fazer quantidades consideréveis de certificados em vários nomes.</h3>
            </div>
            <div className='estilo'>
                    <img alt='style' src={Est2}></img>
                    <img alt='style' src={Est1}></img>
            </div>
            <div style={{display:'flex', justifyContent:'center',alignItems:'center', height:'40%', width:'100%'}}>
                <img className='modelo' src={Cert2} alt='Certificado2'></img>
                <img className='modelo' src={Cert3} alt='Certificado3'></img>
            </div>
            <div className='estilo'>
                    <img alt='style' src={Est2}></img>
                    <img alt='style' src={Est1}></img>
            </div>
            <div style={{display:'flex', height:'47%', width:'100%', paddingBottom:"45px"}}>
                <div className='descri'>
                    <div className='box'>
                        <h3>Formando: </h3>
                        <div className='linha'>
                            <h4>Nome:</h4>
                            <input onChange={(event) => setnome(event.target.value)} placeholder='José Manoel'></input>
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
                </div>
                <div className='container' >
                    {download}
                    {imagem}
                </div>
            </div>
            <div>
                <button onClick={() => criar_imagem()} className='criar'>Gerar imagem</button>
            </div> 
        </div>
    )
}