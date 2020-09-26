import React from 'react';
import { Link } from 'react-router-dom';


import './Destaques.css'


function Destaques({ dados }) {

    return dados.length>0 && dados.length>0 && (
        
        
            
            <div className="div-todas-matérias">
            <div>Destaques</div>
            <div className="div-destaque">
                {dados.map((valor)=>(
                    valor.tipo === 'Destaque'&&<div key={valor.id} className="materiaPrincipal">
                    <Link to={`noticias/${valor.slug}`}><img src={`http://143.255.73.80:3001/images/${valor.Foto.name}`} alt="imagem da postagem"/>
                    <div className="tipo-principal-centro">{valor.tipo}</div>
                    <div className="titulo-principal-centro">{valor.title}</div></Link>
                    </div>
                ))}
                
            </div>
        </div>
    )
        
}

export default Destaques;