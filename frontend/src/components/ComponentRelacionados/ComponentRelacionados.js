import React, {useState, useEffect} from 'react';


//minhas libs



import './ComponentRelacionados.css';

function ComponentRelacionados({dadosRelacionados}){







    return dadosRelacionados.length>3&&(
    <div className="component-relacionados-principal">
       
    <div className="recomendado-para-você">Recomendado para você</div>
    <div className="component-relacionados-principal-2">
        
        {dadosRelacionados.map((valor,index)=>(
           index<3&&(<div key={index} className="component-relacionados-div">
           <div className="div-da-imagem"> <img className="img-relacionados" src="https://ocnoticias.com.br/wp-content/uploads/2019/12/moscou-305x207.jpg"/></div>
            <div className="component-relacionados-div-titulo">{valor.title}</div>
           <div className="component-relacionados-div-data">13/06/2020</div>
           
        </div>)
        ))}
        
    
        </div>
        </div>
    )
}


export default ComponentRelacionados;