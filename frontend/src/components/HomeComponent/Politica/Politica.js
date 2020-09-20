import React from 'react';
import { Link } from 'react-router-dom';


import './Politica.css'


function Politica({ dados }) {


    return dados.length>11&&(
        
     <div className="div-principal space">

       
           <div className="div-principal__maior">
           <div className="div-principal__maior-primeira space">
               <div className="div-principal__maior-primeira-interno spacing-bottom spacing-right">
                   <Link to={`/noticias/${dados[7].slug}`}>
                       <img  src="https://jpimg.com.br/uploads/2020/07/bskusl0rwmyx.jpg"  alt="imagem da postagem"/>
                    </Link>
                   <Link to={`/noticias/${dados[7].slug}`}><div className="div-titulo">{dados[7].title}</div></Link>
                   <Link to={`/noticias/${dados[7].slug}`}><div className="div-tipo">{dados[7].tipo}</div></Link>
               </div>

               <div className="div-principal__maior-primeira-interno spacing-bottom">
               <Link to={`/noticias/${dados[8].slug}`}><img src="https://jpimg.com.br/uploads/2020/06/o-flamengo-e-o-atual-campeao-brasileiro-e-da-libertadores.jpg"  alt="imagem da postagem"/></Link>
               <Link to={`/noticias/${dados[8].slug}`}><div className="div-titulo">{dados[8].title}</div></Link>
               <Link to={`/noticias/${dados[8].slug}`}><div className="div-tipo">{dados[8].tipo}</div></Link>
               </div>
           </div>
           <div className="div-principal__maior-primeira">
           <div className="div-principal__maior-primeira-interno spacing-right">
           <Link to={`/noticias/${dados[9].slug}`}><img src="https://jpimg.com.br/uploads/2019/03/maquininha-cartao.jpg"  alt="imagem da postagem"/></Link>
           <Link to={`/noticias/${dados[9].slug}`}><div className="div-titulo">{dados[9].title}</div></Link>
           <Link to={`/noticias/${dados[9].slug}`}><div className="div-tipo">{dados[9].tipo}</div></Link>
           </div>
           <div className="div-principal__maior-primeira-interno">
           <Link to={`/noticias/${dados[10].slug}`}><img src="https://jpimg.com.br/uploads/2020/08/9c77999a4d9ae7d235845a5f36a9881c990c2cabw.jpg"  alt="imagem da postagem"/></Link>
           <Link to={`/noticias/${dados[10].slug}`}><div className="div-titulo">{dados[10].title}</div></Link>
           <Link to={`/noticias/${dados[10].slug}`}> <div className="div-tipo">{dados[10].tipo}</div></Link>
           </div>
           </div>
       </div>
       <div className="div-principal__maior">
       <Link to={`/noticias/${dados[11].slug}`}><img className="primeira-imagem" src="https://jpimg.com.br/uploads/2017/07/trindade.png"  alt="imagem da postagem"/></Link>
       <Link to={`/noticias/${dados[11].slug}`}><div className="div-titulo size">{dados[11].title}</div></Link>
       <Link to={`/noticias/${dados[11].slug}`}><div className="div-tipo">{dados[11].tipo}</div></Link>
       </div>
      
        
     </div>
     
    )
        
}

export default Politica;