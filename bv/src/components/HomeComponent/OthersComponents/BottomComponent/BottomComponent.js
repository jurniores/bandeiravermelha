import Link from 'next/link';



function Bottom ({ dados=[] }){



    return(
<div className="div-block">
            {(
                <div className="div-bottom-inicial">
        
                <div className="bottom-div-propriedades space1" >
                <Link href={`/noticias/${dados[5].slug}`}><a>
                 <img  src={`http://143.255.73.80:3001/images/${dados[5].Foto.name}`} alt="imagem da container economia"/>        
                 <div className="title-bottom">{dados[5].title}</div>
                 <div className="desc-bottom">{dados[5].desc}</div>
                 </a>
                 </Link>
                    <hr/>
                    </div>
                    <div className="bottom-div-propriedades space1">
                    <Link href={`/noticias/${dados[6].slug}`} ><a>
                    <img src={`http://143.255.73.80:3001/images/${dados[6].Foto.name}`} alt="imagem do container economia"/>
                    <div className="title-bottom">{dados[6].title}</div>
                    <div className="desc-bottom">{dados[6].desc}</div> 
                    </a>  
                    </Link> 
                    <hr/>    
                    </div>
                
            </div>

            )}
    
</div>
    )
}


export default Bottom;