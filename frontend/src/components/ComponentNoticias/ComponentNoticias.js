import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ComponentNoticias.css'
import { useSelector, useDispatch } from 'react-redux';




import AxiosRequest from '../Modules/Request/Request';
import Aside from '../HomeComponent/AsideComponent/AsideComponent';
import Footer from '../FooterComponent/FooterComponent';
import Delay from '../CarregandoComponent/CarregandoComponent';
import MAISLIDAS from '../Modules/MaisLidas/MaisLidas';
import Covid from '../Modules/Covid19Component/Covid19Component';


function ComponentNoticias ({tipo}) {
    
    const dataRedux = useSelector(state=>state.Aside)
    
    const [stop, setStop] = useState(false)
    const [ MaisLidas, getLidas ] =MAISLIDAS()
    const [covidData, getCovid] = Covid()

    const [ DadosPost, get] = AxiosRequest()
    const [ DadosPostagemTipo, getTipo] = AxiosRequest()
    const [ carregaMais, setCarregaMais] = useState(8)
    const [ delay, setDelay] = useState(false)
    const dispatch = useDispatch()
    
    
    
    function CarregPagina() {
        setDelay(true)
        setTimeout(()=>{
            setCarregaMais(carregaMais+4)
            setDelay(false)
        },600)
        
    }


    useEffect(()=>{
      
            if(MaisLidas.length>0 && covidData.length>0) {
                dispatch({
                    type: 'ADICIONA_POST',
                    data: {
                        MaisLidas,
                        covidData,
                    }
                })
                
                return
            }
        
        
        
        if(DadosPost.length>0 && MaisLidas.length>0) return
        if(DadosPost.length>0 && dataRedux.MaisLidas.length===0) return (getLidas(DadosPost),setStop(true))
        if(DadosPost.length>0 && dataRedux.MaisLidas.length>0) return
   
        if(tipo){
             getTipo({
                
                    url: `http://143.255.73.80:3001/tipos/${tipo}`,
                    method: 'get'
                
            })
        }
        if(dataRedux.MaisLidas.length===0 || !tipo){
            get({
                url: `http://143.255.73.80:3001/posts`,
                method: 'get'
            })
        }
            

        if(dataRedux.covidData.length>0) return
        
        
       getCovid()


        /*eslint-disable */
    }, [stop, covidData])
    
    return DadosPost.length>0 || DadosPostagemTipo.length>0?(
        <>
        <div className="component-noticias-principal">
            <div className="div-separadora">
                
            {DadosPostagemTipo.length>0 &&
                DadosPostagemTipo.map((valor,index) =>(
                    index<carregaMais&&
            <div className="component-noticias-principal__feed" key={valor.id}>
            <Link to={`/noticias/${valor.slug}`}><img src={`http://143.255.73.80:3001/images/${valor.Foto.name}`}/></Link>
            <div className="component-noticias-principal__div-block">
            <div className="noticias-tipo">{valor.tipo}</div>
            <Link to={`/noticias/${valor.slug}`}><div className="noticias-titulo">{valor.title}</div></Link>
            <Link to={`/noticias/${valor.slug}`}><div className="noticias-desc">{valor.desc}</div></Link>
            
            </div>
            
        </div>
        
        
       ))
       }
        {(DadosPost.length>0&&!tipo) &&
                DadosPost.map((valor,index) =>(
                    index<carregaMais&&
            <div className="component-noticias-principal__feed" key={valor.id}>
            <Link to={`/noticias/${valor.slug}`}><img src={`http://143.255.73.80:3001/images/${valor.Foto.name}`}/></Link>
            <div className="component-noticias-principal__div-block">
            <div className="noticias-tipo">{valor.tipo}</div>
            <Link to={`/noticias/${valor.slug}`}><div className="noticias-titulo">{valor.title}</div></Link>
            <Link to={`/noticias/${valor.slug}`}><div className="noticias-desc">{valor.desc}</div></Link>
            
            </div>
            
        </div>
        
        
       ))
       }
             
       <button className="buttonCarregar-noticias" onClick={CarregPagina}> Carregar Mais</button>
        </div>        
       <div className="aside-noticias-principal">
        <Aside covidData={dataRedux.covidData.length>0?dataRedux.covidData:covidData} MaisLidas={dataRedux.MaisLidas.length>0?dataRedux.MaisLidas:MaisLidas} />

        {delay&&<Delay/>}
        
        
        </div>
        
    </div>
    <Footer/>
    
   </> 

    ):<Delay/>
}



export default ComponentNoticias;