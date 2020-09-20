import React from 'react';
import { Link } from 'react-router-dom';


import './Destaques.css'


function Destaques({ dados }) {

    return dados.length>0 && dados.length>0 && (
        
        
            
            <div className="div-todas-matérias">
            <div>Destaques</div>
            <div className="div-destaque">
                <div className="materiaPrincipal">
                    <Link to={`noticias/${dados[0].slug}`}><img src="https://ogimg.infoglobo.com.br/in/24510460-a51-6c3/FT1086A/652/xwilson-witzel.jpg.pagespeed.ic.8YD7JgF0aX.jpg" alt="imagem da postagem"/></Link>
                    <Link to={`noticias/${dados[0].slug}`}><div className="tipo-principal-centro">{dados[0].tipo}</div></Link>
                    <Link to={`noticias/${dados[0].slug}`}><div className="titulo-principal-centro">{dados[0].title}</div></Link>
                </div>
                <div className="materiaPrincipal">
                <Link to={`noticias/${dados[1].slug}`}><img src="https://jpimg.com.br/uploads/2020/08/andre-brandao.jpeg" alt="imagem da postagem"/></Link>
                <Link to={`noticias/${dados[1].slug}`}><div className="tipo-principal-centro">{dados[1].tipo}</div></Link>
                <Link to={`noticias/${dados[1].slug}`}><div className="titulo-principal-centro">{dados[1].title}</div></Link>
                </div>
                <div className="materiaPrincipal">
                <Link to={`noticias/${dados[2].slug}`}><img src="https://jpimg.com.br/uploads/2018/03/hechizos-de-amor-para-tener-sexo-con-tu-pareja.jpg" alt="imagem da postagem"/></Link>
                <Link to={`noticias/${dados[2].slug}`}><div className="tipo-principal-centro">{dados[2].tipo}</div></Link>
                <Link to={`noticias/${dados[2].slug}`}><div className="titulo-principal-centro">{dados[2].title}</div></Link>
                </div>
                <div className="materiaPrincipal space-destaque">
                <Link to={`noticias/${dados[3].slug}`}><img src="https://jpimg.com.br/uploads/2020/08/bayern-de-munique-philippe-coutinho-efeepamanu-fernandez.jpg" alt="imagem da postagem"/></Link>
                <Link to={`noticias/${dados[3].slug}`}><div className="tipo-principal-centro">{dados[3].tipo}</div></Link>
                <Link to={`noticias/${dados[3].slug}`}><div className="titulo-principal-centro">Titu{dados[3].title}lo</div></Link>
                </div>
            </div>
        </div>
    )
        
}

export default Destaques;