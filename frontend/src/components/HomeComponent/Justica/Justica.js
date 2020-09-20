import React from 'react';
import { Link } from 'react-router-dom';


import './Justica.css'


function Educacao({ dados }) {
    return dados.length>6&&(
        
     <div className="div-principal space">

        <div className="div-principal__maior">
        <Link to={`/noticias/${dados[2].slug}`}><img className="primeira-imagem" alt="imagem da postagem" src="https://jpimg.com.br/uploads/2019/08/46966744882_a4d002d167_o.jpg"/></Link>
        <Link to={`/noticias/${dados[2].slug}`}><div className="div-titulo size">{dados[2].title}</div></Link>
        <Link to={`/noticias/${dados[2].slug}`}><div className="div-tipo">{dados[2].tipo}</div></Link>
        </div>
        <div className="div-principal__maior">
            <div className="div-principal__maior-primeira space">
                <div className="div-principal__maior-primeira-interno spacing-bottom spacing-right">
                <Link to={`/noticias/${dados[3].slug}`}><img alt="imagem da postagem" src="https://midia.agoranordeste.com.br/uploads/imagens/cidades/ferreiros/prefeito_bruno_japhet.jpg?1597920877573"/></Link>
                <Link to={`/noticias/${dados[3].slug}`}><div className="div-titulo">{dados[3].title}</div></Link>
                <Link to={`/noticias/${dados[3].slug}`}><div className="div-tipo">{dados[3].tipo}</div></Link>
                </div>

                <div className="div-principal__maior-primeira-interno spacing-bottom">
                <Link to={`/noticias/${dados[4].slug}`}><img alt="imagem da postagem" src="https://jpimg.com.br/uploads/2020/06/o-flamengo-e-o-atual-campeao-brasileiro-e-da-libertadores.jpg"/></Link>
                <Link to={`/noticias/${dados[4].slug}`}><div className="div-titulo">{dados[4].title}</div></Link>
                <Link to={`/noticias/${dados[4].slug}`}><div className="div-tipo">{dados[4].tipo}</div></Link>
                </div>
            </div>
            <div className="div-principal__maior-primeira">
            <div alt="imagem da postagem" className="div-principal__maior-primeira-interno spacing-right">
            <Link to={`/noticias/${dados[5].slug}`}><img  alt="imagem da postagem" src="https://jpimg.com.br/uploads/2019/03/maquininha-cartao.jpg"/></Link>
            <Link to={`/noticias/${dados[5].slug}`}><div className="div-titulo">{dados[5].title}</div></Link>
            <Link to={`/noticias/${dados[5].slug}`}><div className="div-tipo">{dados[5].tipo}</div></Link>
            </div>
            <div className="div-principal__maior-primeira-interno">
            <Link to={`/noticias/${dados[6].slug}`}><img alt="imagem da postagem" src="https://midia.agoranordeste.com.br/uploads/imagens/cidades/ferreiros/prefeito_bruno_japhet.jpg?1597920877573"/></Link>
            <Link to={`/noticias/${dados[6].slug}`}><div className="div-titulo">{dados[6].title}</div></Link>
            <Link to={`/noticias/${dados[6].slug}`}><div className="div-tipo">{dados[6].tipo}</div></Link>
            </div>
            </div>
        </div>
     </div>
    )
}

export default Educacao;