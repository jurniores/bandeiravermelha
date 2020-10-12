import Link from 'next/link';
import { useEffect } from 'react';


import MaisLidasGet from '../../Modules/MaisLidas/MaisLidas';




export default function Aside ({post, BrasilCovid=[], PernambucoCovid=[] }) {    const [MaisLidas, getLidas] = MaisLidasGet()
    
    useEffect(()=>{
        
        if(!post) return
          
          getLidas(post)
    
    },[post])


    return (
        
    <aside className="aside-noticias">
            <div className="aside-div-lateral">Mais lidas</div>
            {MaisLidas.length>0 &&
                MaisLidas.map((valor, index)=>(
                    index<7&&
                    <Link key={index} href={`/noticias/${valor.slug}`}>
                        <a>
                        <div  className="mais-lidas">
                        <span>{index+1}</span> {valor.title}</div>
                        </a>
                    </Link>
                    )
                    )
                
          
            }
            <div className="tabela-covid">
                <div className="div-covid">Covid 19</div>
                <div className="tabela-nome">
                <span>Brasil</span>
                </div>

               <div className="tabela-pais">
                   
                   
                <div className="div-dados">Casos: <span>{BrasilCovid.cases?BrasilCovid.confirmed.toLocaleString('en'):'--'}</span></div>
                <div className="div-dados">Óbitos: <span>{BrasilCovid.cases?BrasilCovid.deaths.toLocaleString('en'):'--'}</span></div>
                    
               </div>
               <div className="tabela-nome">
                <span>Pernambuco</span>
                </div>

               <div className="tabela-pais">
                   
                   
                   <div className="div-dados">Casos: <span>{PernambucoCovid.cases?PernambucoCovid.cases.toLocaleString('en'):'--'}</span></div>
                   <div className="div-dados">Óbitos: <span>{PernambucoCovid.cases?PernambucoCovid.deaths.toLocaleString('en'):'--'}</span></div>
               </div>
              
               
               </div>
                    </aside>
    )
}


    


    
    
    
    
    
  
