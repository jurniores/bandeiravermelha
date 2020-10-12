import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';



import './ComponentNoticiasPath.css';

import Aside from '../HomeComponent/AsideComponent/AsideComponent';
import AxiosRequest from '../Modules/Request/Request';
import MAISLIDAS from '../Modules/MaisLidas/MaisLidas';
import Covid from '../Modules/Covid19Component/Covid19Component';
import Delay from '../CarregandoComponent/CarregandoComponent';
import ComponentRelacionados from '../ComponentRelacionados/ComponentRelacionados';
import Footer from '../FooterComponent/FooterComponent';



function NoticiasPath () {

    const { slug }  = useParams();
    const [ Reload, setReload] = useState(false);
    const [ users, setUsers] = useState(false);
    const dataRedux = useSelector(state=>state.Aside);
    
   


    const [ MaisLidas, getLidas ] =MAISLIDAS()
    const [covidData, getCovid] = Covid()
    
    const [ DadosPost, get] = AxiosRequest()
    const [ dadosRelacionados, getRelacionados] = AxiosRequest()
    const [ , getView] = AxiosRequest()
    const [ DadosNoticias, getNoticias] = AxiosRequest()
    const [ text, setText] =useState(false)

    
    
    const dispatch = useDispatch()

    function datePTBR(date){	
    const data2 = date.split('T')
    const dataPTBR = data2[0].split('-').reverse().join('/')
    return [dataPTBR, data2[1]]
    }

    

    useEffect(()=>{
       if(DadosNoticias) {
           const NoticiasText = DadosNoticias.text.split('**')
           setText(NoticiasText)

       }
    },[DadosNoticias])

    useEffect(()=>{

        
        if(DadosNoticias.id) {
            
            getView({
                url: `http://143.255.73.80:3001/views/${DadosNoticias.View.id}`,
                method: 'put',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                   'Authorization': 'Bearer ' + users.token
                 },
                data:JSON.stringify({view:DadosNoticias.View.view+1})
            })
            getRelacionados({
                url: `http://143.255.73.80:3001/tipos/${DadosNoticias.tipo}`,
                method: 'get'
            })
        }
        
        /*eslint-disable */
    },[DadosNoticias])


    useEffect(()=>{
        
        if(localStorage.getItem('users')) {
            if(localStorage.getItem('users').length>0){
                setUsers(JSON.parse(localStorage.getItem('users')))
            }
        }
    },[])

    useEffect(()=>{
        getNoticias({
            url: `http://143.255.73.80:3001/posts/${slug}`,
            method: 'get'
        })
        
        
    },[Reload])
    FB.XFBML.parse()
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
        if(DadosPost.length>0 && dataRedux.MaisLidas.length===0) return getLidas(DadosPost)
        if(DadosPost.length>0 && dataRedux.MaisLidas.length>0) return
   
        
         get({
            url: 'http://143.255.73.80:3001/posts',
            method: 'get'
        })
        
      
        

        if(dataRedux.covidData.length>0) return
        
        
       getCovid()
       
          
    
    
        /*eslint-disable */
    }, [MaisLidas, covidData, DadosPost])

    return DadosNoticias.id?(
        
        <>
            
         
        
        <div className="noticiasPath-divPrincipal">
            
            <div className="noticiaPath-divSecundaria-block">
            {users&&<div><span>Views:</span> <span className="views-postagem-noticias-path">{DadosNoticias.View.view}</span></div>}
            <h1 className="noticiaPath-divSecundaria-title">
                {DadosNoticias.title}
                </h1>
                <h2 className="noticiaPath-divSecundaria-desc">
                {DadosNoticias.desc}
                </h2>
                <hr/>
                <small className="noticiasPath-date">Por <b style={{color: 'red'}}>CN</b>  {datePTBR(DadosNoticias.created_at)[0]} {datePTBR(DadosNoticias.created_at)[1].slice(0,-8)}</small>
                <hr/>
                <img className="noticiaPath-divSecundaria-block-img" src={`http://143.255.73.80:3001/images/${DadosNoticias.Foto.name}`}/>
                
                {text&&<div className="noticiaPath-divSecundaria-text" dangerouslySetInnerHTML={{__html: text}}>
        
                    </div>}
               
                <div className="fb-comments" data-href={`http://www.bandeiravermelha.com.br/${DadosNoticias.title.split(' ')[0]}`} data-numposts="5" data-width=""></div>
                <ComponentRelacionados dadosRelacionados={dadosRelacionados} ativa={()=>{
                setReload(!Reload)
            }} />
                
            </div>
            <div className="noticiaPath-divSecundaria-block__aside"><Aside ativa={()=>{
                setReload(!Reload)
            }} 
            covidData={dataRedux.covidData.length>0?dataRedux.covidData:covidData}
             MaisLidas={dataRedux.MaisLidas.length>0?dataRedux.MaisLidas:MaisLidas}
             /></div>
                     
        </div>
        
        <Footer/>
        
        </>
    ):<Delay/>
}


export default NoticiasPath;