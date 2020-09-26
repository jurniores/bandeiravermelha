import React from 'react';
import { Link } from 'react-router-dom';
import './BottomComponent.css'


function Bottom ({ dados }){



    return(
<div className="div-block">
            {dados.length>6&&(
                <div className="div-bottom-inicial">
        
                <div className="bottom-div-propriedades space1" >
                <Link to={`/noticias/${dados[5].slug}`}>
                 <img  src={`http://143.255.73.80:3001/images/${dados[5].Foto.name}`} alt="imagem da container economia"/>        
                 <div className="title-bottom">{dados[5].title}</div>
                 <div className="desc-bottom">{dados[5].desc}</div>
                 </Link>
                    <hr/>
                    </div>
                    <div className="bottom-div-propriedades space1">
                    <Link to={`/noticias/${dados[6].slug}`} >
                    <img src={`http://143.255.73.80:3001/images/${dados[6].Foto.name}`} alt="imagem do container economia"/>
                    <div className="title-bottom">{dados[6].title}</div>
                    <div className="desc-bottom">{dados[6].desc}</div>   
                    </Link> 
                    <hr/>    
                    </div>
                
            </div>

            )}
    
</div>
    )
}


export default Bottom;