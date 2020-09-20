import React from 'react'
import { Link } from 'react-router-dom'





export default function Aside ({ MaisLidas, covidData, ativa}) {
    

    return (
    <aside className="aside-noticias">
            <div className="aside-div-lateral">Mais lidas</div>
            {MaisLidas &&
                MaisLidas.map((valor, index)=>(
                    index<7&&
                    <Link onClick={ativa} key={valor.id} to={`/noticias/${valor.slug}`}>
                        <div  className="mais-lidas">
                            <span>{index+1}</span> {valor.title}</div></Link>
                    )
                    )
                
          
            }
            <div className="tabela-covid">
                <div className="div-covid">Covid 19</div>
                <div className="tabela-nome">
                <span>Brasil</span>
                </div>

               <div className="tabela-pais">
                   
                   
                    <div className="div-dados">Casos: <span>{covidData.length>0&&covidData[0].confirmed.toLocaleString('pt-br')}</span></div>
                   <div className="div-dados">Óbitos: <span>{covidData.length>0&&covidData[0].deaths.toLocaleString('pt-br')}</span></div>
               </div>
               <div className="tabela-nome">
                <span>Pernambuco</span>
                </div>

               <div className="tabela-pais">
                   
                   
                   <div className="div-dados">Casos: <span>{covidData.length>0&&covidData[1].cases.toLocaleString('pt-br')}</span></div>
                   <div className="div-dados">Óbitos: <span>{covidData.length>0&&covidData[1].deaths.toLocaleString('pt-br')}</span></div>
               </div>
              
               
               </div>
                    </aside>
    )
}