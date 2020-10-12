import Link from 'next/link';





function Educacao({ dados }) {
    
    return dados.length>6&&(
        
     <div className="div-principal space">

        <div className="div-principal__maior ">
        <Link href={`/noticias/${dados[2].slug}`}><a>
        <img className="primeira-imagem" alt="imagem da postagem" src={`http://143.255.73.80:3001/images/${dados[2].Foto.name}`}/>
        <div className="div-titulo size">{dados[2].title}</div>
        <div className="div-tipo">{dados[2].tipo}</div>
        </a>
        </Link>
        </div>
        <div className="div-principal__maior">
            <div className="div-principal__maior-primeira spacing-1 space spacing-right">
                <div className="div-principal__maior-primeira-interno spacing-bottom ">
                <Link href={`/noticias/${dados[3].slug}`}>
                <a>
                <img alt="imagem da postagem" src={`http://143.255.73.80:3001/images/${dados[3].Foto.name}`}/>
                <div className="div-titulo">{dados[3].title}</div>
                <div className="div-tipo">{dados[3].tipo}</div>
                </a>
                </Link>
                </div>

                <div className="div-principal__maior-primeira-interno spacing-bottom">
                <Link href={`/noticias/${dados[4].slug}`}>
                <a>
                <img alt="imagem da postagem" src={`http://143.255.73.80:3001/images/${dados[4].Foto.name}`}/>
                <div className="div-titulo">{dados[4].title}</div>
                <div className="div-tipo">{dados[4].tipo}</div>
                </a>
                </Link>
                </div>
            </div>
            <div className="div-principal__maior-primeira spacing-left">
            <div alt="imagem da postagem" className="div-principal__maior-primeira-interno">
            <Link href={`/noticias/${dados[5].slug}`}>
            <a>
            <img  alt="imagem da postagem" src={`http://143.255.73.80:3001/images/${dados[5].Foto.name}`}/>
            <div className="div-titulo">{dados[5].title}</div>
            <div className="div-tipo">{dados[5].tipo}</div>
            </a>
            </Link>
            </div>
            <div className="div-principal__maior-primeira-interno">
            <Link href={`/noticias/${dados[6].slug}`}>
            <a>
            <img alt="imagem da postagem" src={`http://143.255.73.80:3001/images/${dados[6].Foto.name}`}/>
            <div className="div-titulo">{dados[6].title}</div>
            <div className="div-tipo">{dados[6].tipo}</div>
            </a>
            </Link>
            </div>
            </div>
        </div>
     </div>
    )
}

export default Educacao;