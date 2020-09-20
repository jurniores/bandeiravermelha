import React from 'react';
import { Link } from 'react-router-dom';
import './BottomComponent.css'


function Bottom ({ dados }){



    return(
<div className="div-block">
            {dados.length>0&&(
                <div className="div-bottom-inicial">
        
                <div className="bottom-div-propriedades space1" >
                 <Link to="/noticias"><img  src="https://ocnoticias.com.br/wp-content/uploads/2019/10/aborto3-622x420.jpg" alt="imagem da container economia"/></Link>        
                 <Link to="/noticias"><div className="title-bottom">{dados[0].title}</div></Link>
                 <Link to="/noticias"><div className="desc-bottom">{dados[0].desc}</div></Link>
                    <hr/>
                    </div>
                    <div className="bottom-div-propriedades space1">
                    <Link to="/noticias"><img src="https://ocnoticias.com.br/wp-content/uploads/2020/08/pilula-622x420.jpg" alt="imagem do container economia"/></Link>
                    <Link to="/noticias"><div className="title-bottom">{dados[1].title}</div></Link>
                    <Link to="/noticias"><div className="desc-bottom">{dados[1].desc}</div></Link>    
                    <hr/>    
                    </div>
                
            </div>

            )}
    
</div>
    )
}


export default Bottom;