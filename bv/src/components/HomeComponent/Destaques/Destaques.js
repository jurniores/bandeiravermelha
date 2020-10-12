import Link from 'next/link';






function Destaques({ dados }) {

    return (
        
        
            
            <div className="div-todas-matérias">
            <div>Destaques</div>
            <div className="div-destaque">
                {dados.map((valor,index)=>(
                    valor.tipo === 'Destaque'&&<div key={index} className="materiaPrincipal">
                    <Link href={`noticias/${valor.slug}`}>
                    <a>
                    <img src={`http://143.255.73.80:3001/images/${valor.Foto.name}`} alt="imagem da postagem"/>
                    <div className="tipo-principal-centro">{valor.tipo}</div>
                    <div className="titulo-principal-centro">{valor.title}</div>
                    </a>
                    </Link>
                    </div>
                ))}
                
            </div>
        </div>
    )
        
}

export default Destaques;