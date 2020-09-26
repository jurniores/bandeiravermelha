import React from 'react';
import { Link } from 'react-router-dom';
//minhas libs

import './ComponentRelacionados.css';

function ComponentRelacionados({dadosRelacionados, ativa}){


    function datePTBR(date){	
        const data2 = date.split('T')
        const dataPTBR = data2[0].split('-').reverse().join('/')
        return dataPTBR
    }


    return dadosRelacionados.length>3&&(
    <div className="component-relacionados-principal">
       
    <div className="recomendado-para-você">Recomendado para você</div>
    <div className="component-relacionados-principal-2">
        
        {dadosRelacionados.map((valor,index)=>(
           index<3&&(<div key={index} className="component-relacionados-div">
           <Link onClick={ativa} to={`/noticias/${valor.slug}`}><div className="div-da-imagem"> <img className="img-relacionados" alt="foto dos itens relacionados" src={`http://143.255.73.80:3001/images/${valor.Foto.name}`}/></div>
            <div className="component-relacionados-div-titulo">{valor.title}</div>
           <div className="component-relacionados-div-data">{datePTBR(valor.created_at)}</div>
           </Link>
           
        </div>)
        ))}
        
    
        </div>
        </div>
    )
}


export default ComponentRelacionados;