import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import Link from 'next/link';

import Axios from '../../Modules/Request/Request';





function MinhasPostagens({mudaArea, editaPost}){
    let user = useRef('')
    
    const [delay, setDelay]=useState(false);
    const [validaDelete, setValidaDelete]=useState(false);
    const [dados, get] = Axios();
    const [dados2, getDelete] = Axios();
    
   
    

    function desativaDelete(){
        setValidaDelete(false)
    }
     function deleta(n){
        if(user.current){
             getDelete({
                url:`http://143.255.73.80:3001/posts/${n}`,
                method:"delete",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                   'Authorization': 'Bearer ' + user.current.token
                 },
                
            })
        }
        setValidaDelete(false)
        setDelay(false)
    }
  
    useEffect(()=>{
        editaPost(false)
        dados2.success&&dados2.success.map(valor=>toast.success(valor))
        if(localStorage.getItem('users')) {
            if(localStorage.getItem('users').length>0){
                user.current = JSON.parse(localStorage.getItem('users')) 
            }
            
        }
        if(typeof user.current.id !== undefined){
            get({
                url:`http://143.255.73.80:3001/postadm/${user.current.id}`,
                method:"get"
            })
        }
       
        setDelay(true)
        /*eslint-disable */
    },[dados2])

    return dados?(
        <div className="minhaspostagens-principal">
            <div className="div-principal-minhaspostagens">
            {!delay&&<div className="apagando-post">Apagando...</div>}
            {dados.map(valor=>(
            <div className="todas-postagens-adm" key={valor.id}>
                <Link href={`/noticias/${valor.slug}`}><a><div className="postagem-adm-title">{valor.title}</div></a></Link>
                <Link href={`/noticias/${valor.slug}`}><a><div className="postagem-adm-desc">{valor.desc}</div></a></Link>
                <Link href={`/noticias/${valor.slug}`}><a><div className="postagem-adm-tipo">{valor.tipo}</div></a></Link>
                <Link href={`/noticias/${valor.slug}`}><a><div className="postagem-adm-views">Views: {valor.View.view}</div></a></Link>
                <div className="deleta-edita">
                    <div className="deleta-postadm" onClick={()=>{
                        setValidaDelete(valor.id)
                    }}>Deletar</div>
                    <div className="edita-postadm" onClick={()=>{

                        editaPost([{
                            slug:valor.slug,
                            title: valor.title,
                            desc: valor.desc,
                            text: valor.text,
                            author: valor.author,
                            user_id: valor.id,
                            tipo: valor.tip,
                            tags: valor.tags
                        },{
                            id:valor.id
                        }])
                        mudaArea(2)
                        
                    }}>Editar</div>
                    
                </div>
                
                </div>))}
               
            </div>
            {validaDelete&&<div className="ativa-delete">
                <div className="ativa-delete-div-secundaria">
                    <div className="div-delete-pergunta">Deseja realmente apagar a postagem?</div>
                    <button  onClick={()=>{
                        deleta(validaDelete)
                    }}>Apagar</button><button onClick={desativaDelete}>Cancelar</button>
                </div>
            </div>}
        </div>
    ):(<div>Carregando...</div>)
}

export default MinhasPostagens;