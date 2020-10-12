import React, { useEffect, useState } from 'react';
import Link from 'next/link';





function Politica({ dados }) {
    const [dados2, setDados2 ] = useState(false)
        useEffect(()=>{
            setDados2(dados.filter(valor=>valor.tipo==="Notícia"))
         },[dados]) 

    return dados2.length>4&&(
        
     <div className="div-principal space">

       
           <div className="div-principal__maior">
           <div className="div-principal__maior-primeira space spacing-right">
               <div className="div-principal__maior-primeira-interno spacing-bottom ">
                   <Link href={`/noticias/${dados2[0].slug}`}>
                    <a>
                    <img src={`http://143.255.73.80:3001/images/${dados2[0].Foto.name}`}  alt="imagem da postagem"/>
                   <div className="div-titulo">{dados2[0].title}</div>
                   <div className="div-tipo">{dados2[0].tipo}</div>
                   </a>
                   </Link>
               </div>

               <div className="div-principal__maior-primeira-interno  spacing-bottom">
               <Link href={`/noticias/${dados2[1].slug}`}>
               <a>
                <img src={`http://143.255.73.80:3001/images/${dados2[1].Foto.name}`}  alt="imagem da postagem"/>
               <div className="div-titulo">{dados2[1].title}</div>
               <div className="div-tipo">{dados2[1].tipo}</div>
               </a>
               </Link>
               </div>
           </div>
                <div className="div-principal__maior-primeira spacing-left">
                <div className="div-principal__maior-primeira-interno ">
                <Link href={`/noticias/${dados2[2].slug}`}>
                <a>
                <img src={`http://143.255.73.80:3001/images/${dados2[2].Foto.name}`}  alt="imagem da postagem"/>
                <div className="div-titulo">{dados2[2].title}</div>
                <div className="div-tipo">{dados2[2].tipo}</div>
                </a>
                </Link>
           </div>
            <div className="div-principal__maior-primeira-interno">
            <Link href={`/noticias/${dados2[3].slug}`}>
            <a>
            <img src={`http://143.255.73.80:3001/images/${dados2[3].Foto.name}`}  alt="imagem da postagem"/>
            <div className="div-titulo">{dados2[3].title}</div>
            <div className="div-tipo">{dados2[3].tipo}</div>
            </a>
            </Link>
            </div>
           </div>
       </div>
       <div className="div-principal__maior">
       <Link href={`/noticias/${dados2[4].slug}`}>
       <a>   
       <img className="primeira-imagem" src={`http://143.255.73.80:3001/images/${dados2[4].Foto.name}`}  alt="imagem da postagem"/>
       <div className="div-titulo size">{dados2[4].title}</div>
       <div className="div-tipo">{dados2[4].tipo}</div>
       </a>
       </Link>
       </div>
      
        
     </div>
     
    )
        
}

export default Politica;