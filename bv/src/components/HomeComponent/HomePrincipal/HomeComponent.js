import Link from 'next/link';
import dynamic from 'next/dynamic';

import ModeloComponent2 from '../../ModeloComponent/ModeloComponent2';
import Bottom from '../OthersComponents/BottomComponent/BottomComponent';
import Politica from '../Politica/Politica';
import Justica from '../Justica/Justica';
import Footer from '../../FooterComponent/FooterComponent';
import Destaques from '../Destaques/Destaques';
const Aside = dynamic(() => import('../AsideComponent/AsideComponent'))



export default function HomeComponent({post, PernambucoCovid, BrasilCovid}) {
    

    
    
    return (
        
        <>
        <div className="div-principal-home-component">           

        <Destaques dados={post}/>

        <div className="div-noticias">
            <ModeloComponent2>
            <div className="div-todas-matérias">Notícias</div>
        {post.length>0&&
                post.map((valor,indice)=>(
                    
                    indice<12&&(<div key={indice} className="home-section-central2">
                       <div className="div-img">
                        <Link href={`/noticias/${valor.slug}`}><a><img src={`http://143.255.73.80:3001/images/${valor.Foto.name}`} alt="imagem de destaque secundário"/></a></Link>
                        </div>
                        <Link href={`/noticias/${valor.slug}`}><a><span title={valor.title} className="home-titulo2 display-block">{valor.title}</span></a></Link>
                        <Link href={`/noticias/${valor.slug}`}><a><span className="home-descricao2 display-block">{valor.desc}</span></a></Link>
                        <Link href={`/noticias/${valor.slug}`}><a><span className="home-data2 display-block">{valor.date}</span></a></Link>
                    
                    </div>)
                ))}
                    
        </ModeloComponent2>
        
        <Aside post={post} BrasilCovid={BrasilCovid} PernambucoCovid={PernambucoCovid}/> </div>
            

                     <Bottom dados={post}/>
                    <Justica dados={post}/>
                    <hr/>
                    <Politica dados={post}/>
                    </div>
                     <Footer/> 
               
        </>
        
    )
    
}





