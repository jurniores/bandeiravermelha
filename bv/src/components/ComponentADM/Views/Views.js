import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Delay from '../../CarregandoComponent/CarregandoComponent';
import Axios from '../../Modules/Request/Request';
import './Views.css'




function Views(){
    let user = useRef('')
    const [dados, get] = Axios();
    console.log(dados.length)
    useEffect(()=>{
        if(localStorage.getItem('users').length>0) {
            user.current = JSON.parse(localStorage.getItem('users')) 
        }
        if(typeof user.current.id !== undefined){
            get({
                url:`http://143.255.73.80:3001/postadm/${user.current.id}`,
                method:"get"
            })
        }
        
    },[])

    return dados.length>0?(
        <div className="minhaspostagens-principal">
            <div className="div-principal-minhaspostagens">
            {dados.map(valor=>(
            <div className="todas-postagens-adm" key={valor.id}>
                <Link to={`/noticia/${valor.slug}`}><div className="postagem-adm-title">Titulo: {valor.title}</div></Link>
                <Link to={`/noticia/${valor.slug}`}><div className="postagem-adm-desc">Descrição: {valor.desc}</div></Link>
                <Link to={`/noticia/${valor.slug}`}><div className="postagem-adm-tipo">Tipo: {valor.tipo}</div></Link>
                <Link to={`/noticia/${valor.slug}`}><div className="postagem-adm-views">Views: {valor.View.view}</div></Link>
                
                </div>))}
            </div>
        </div>
    ):(<Delay/>)
}

export default Views;