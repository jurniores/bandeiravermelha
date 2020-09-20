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
import Facebook from '../ComponentFacebook/Facebook';
import Noticias from '../../pages/PageNoticias/PageNoticias';

function NoticiasPath () {

    const { slug }  = useParams()
    const [ Reload, setReload] = useState(false)
    const [ users, setUsers] = useState(false)
    const dataRedux = useSelector(state=>state.Aside)

    const [ MaisLidas, getLidas ] =MAISLIDAS()
    const [covidData, getCovid] = Covid()
    
    const [ DadosPost, get] = AxiosRequest()
    const [ dadosRelacionados, getRelacionados] = AxiosRequest()
    const [ , getView] = AxiosRequest()
    const [ DadosNoticias, getNoticias] = AxiosRequest()
    const [ text, setText] =useState(false)
    const [ text2, setText2] =useState(false)
    
    
    const dispatch = useDispatch()

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
        document.title= DadosNoticias.title,
        <>
        <div id="fb-root"></div>
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
                <img className="noticiaPath-divSecundaria-block-img" src="https://jpimg.com.br/uploads/2019/11/carmen-lucia.jpg"/>
                
                {text&&<div className="noticiaPath-divSecundaria-text" dangerouslySetInnerHTML={{__html: text}}>
        
                    </div>}
               
                
                <ComponentRelacionados dadosRelacionados={dadosRelacionados} />
                <div className = "fb-comments" data-href = "http://www.bandeiravermelha.com.br/" data-numposts = "5" data-width = "" > </div>
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