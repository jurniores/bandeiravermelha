import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Footer from '../../../components/FooterComponent/FooterComponent';



export default function Tags () {
    const [DadosNoticias, setDadosNoticias] = useState([])
    const route = useRouter()
    const { id } = route.query
   
    useEffect(()=>{
        fetch(`http://143.255.73.80:3001/search/${id}`).then(res=>res.json()).then(res=>setDadosNoticias(res))
    },[])


    return DadosNoticias.length>0?(
        <>
        <Head>
            <title>
                Tags
            </title>
        </Head>
        <div className="component-noticias-principal">
            <div className="div-separadora">
                
          
        {
                DadosNoticias.map((valor,index) =>(      
            <div className="component-noticias-principal__feed" key={valor.id}>
            <Link href={`/noticias/${valor.slug}`}>
            <a>
            <img src={`http://143.255.73.80:3001/images/${valor.Foto.name}`}/>
            </a>
            </Link>
            <div className="component-noticias-principal__div-block">
            <div className="noticias-tipo">{valor.tipo}</div>
            <Link href={`/noticias/${valor.slug}`}>
            <a>
            <div className="noticias-titulo">{valor.title}</div>
            </a>
            </Link>
            <Link href={`/noticias/${valor.slug}`}>
            <a>
            <div className="noticias-desc">{valor.desc}
            </div>
            </a>
            </Link>
            
            </div>
            
        </div>
        
        
       ))
       }
       
        </div>        
  
        </div>
        <Footer/>
        </>
        
   
    
   
):<>
    <Head>
            <title>
                Tags
            </title>
    </Head>
        <div className='tags-noticias'>Não existe nenhuma postagem!</div>
        </>
}

