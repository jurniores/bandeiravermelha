import React from 'react';
import ReactDOM from 'react-dom'
import './CarregandoComponent.css'


function CarregandoComponent () {
    return ReactDOM.createPortal(
        
        <div className = "carregando-component">
            <img className="img-carregando" src="/img/delay.png" alt="imagem de carregamento da página"/>
        </div>,
        document.getElementById('carrega')
    )
}

export default CarregandoComponent;