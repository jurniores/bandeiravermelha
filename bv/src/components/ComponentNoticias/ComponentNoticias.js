import Link from 'next/link';
import Aside from '../HomeComponent/AsideComponent/AsideComponent';
import Footer from '../FooterComponent/FooterComponent';
import { useState } from 'react';



function ComponentNoticias ({DadosNoticias, post, BrasilCovid, PernambucoCovid}) {
    
    const [ carregaMais, setCarregaMais] = useState(8)
    
    
 


    function CarregPagina() {
        
        setTimeout(()=>{
            setCarregaMais(carregaMais+4)
            
        },600)
        
    }
        
        
        
        
        
   
    
    return (
        <>
        <div className="component-noticias-principal">
            <div className="div-separadora">
                
          
        {DadosNoticias&&
                DadosNoticias.map((valor,index) =>(
             index<carregaMais&&       
            <div className="component-noticias-principal__feed" key={valor.id}>
            <Link href={`/noticias/${valor.slug}`}>
            <a>
            <img src={`http://143.255.73.80:3001/images/${valor.Foto.name}`}/>
            </a>
            </Link>
            <div className="component-noticias-principal__div-block">
            <div className="noticias-tipo">{valor.tipo}</div>
            <Link href={`/noticias/${valor.slug}`}>
            <a>
            <div className="noticias-titulo">{valor.title}</div>
            </a>
            </Link>
            <Link href={`/noticias/${valor.slug}`}>
            <a>
            <div className="noticias-desc">{valor.desc}
            </div>
            </a>
            </Link>
            
            </div>
            
        </div>
        
        
       ))
       }
             
       <button className="buttonCarregar-noticias" onClick={CarregPagina}> Carregar Mais</button> 
        </div>        
       <div className="aside-noticias-principal">
        <Aside post={post} BrasilCovid={BrasilCovid} PernambucoCovid={PernambucoCovid}/> 


        
        
        
        </div>
        
    </div>
    <Footer/>
    
   </> 

    )
}



export default ComponentNoticias;