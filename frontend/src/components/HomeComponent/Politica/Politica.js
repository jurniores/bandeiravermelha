import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


import './Politica.css'


function Politica({ dados }) {
    const [dados2, setDados2 ] = useState(false)
        useEffect(()=>{
            setDados2(dados.filter(valor=>valor.tipo==="Notícia"))
         },[dados]) 

    return dados2.length>4&&(
        
     <div className="div-principal space">

       
           <div className="div-principal__maior">
           <div className="div-principal__maior-primeira space">
               <div className="div-principal__maior-primeira-interno spacing-bottom spacing-right">
                   <Link to={`/noticias/${dados2[0].slug}`}>
                    <img src={`http://143.255.73.80:3001/images/${dados2[0].Foto.name}`}  alt="imagem da postagem"/>
                   <div className="div-titulo">{dados2[0].title}</div>
                   <div className="div-tipo">{dados2[0].tipo}</div>
                   </Link>
               </div>

               <div className="div-principal__maior-primeira-interno spacing-bottom">
               <Link to={`/noticias/${dados2[1].slug}`}>
                   <img src={`http://143.255.73.80:3001/images/${dados2[1].Foto.name}`}  alt="imagem da postagem"/>
               <div className="div-titulo">{dados2[1].title}</div>
               <div className="div-tipo">{dados2[1].tipo}</div></Link>
               </div>
           </div>
                <div className="div-principal__maior-primeira">
                <div className="div-principal__maior-primeira-interno spacing-right">
                <Link to={`/noticias/${dados2[2].slug}`}><img src={`http://143.255.73.80:3001/images/${dados2[2].Foto.name}`}  alt="imagem da postagem"/>
                <div className="div-titulo">{dados2[2].title}</div>
                <div className="div-tipo">{dados2[2].tipo}</div></Link>
           </div>
            <div className="div-principal__maior-primeira-interno">
            <Link to={`/noticias/${dados2[3].slug}`}><img src={`http://143.255.73.80:3001/images/${dados2[3].Foto.name}`}  alt="imagem da postagem"/>
            <div className="div-titulo">{dados2[3].title}</div>
                <div className="div-tipo">{dados2[3].tipo}</div></Link>
            </div>
           </div>
       </div>
       <div className="div-principal__maior">
       <Link to={`/noticias/${dados2[4].slug}`}><img className="primeira-imagem" src={`http://143.255.73.80:3001/images/${dados2[4].Foto.name}`}  alt="imagem da postagem"/>
       <div className="div-titulo size">{dados2[4].title}</div>
       <div className="div-tipo">{dados2[4].tipo}</div></Link>
       </div>
      
        
     </div>
     
    )
        
}

export default Politica;