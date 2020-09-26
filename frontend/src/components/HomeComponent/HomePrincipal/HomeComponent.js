import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//modelos próprios de componentes
import ModeloComponent2 from '../../ModeloComponent/ModeloComponent2';
import Bottom from '../OthersComponents/BottomComponent/BottomComponent';
import Politica from '../Politica/Politica';
import Justica from '../Justica/Justica';
import Footer from '../../FooterComponent/FooterComponent';
import Destaques from '../Destaques/Destaques';
import Aside from '../AsideComponent/AsideComponent';
import Axios from '../../Modules/Request/Request';
import Delay from '../../CarregandoComponent/CarregandoComponent';

//Modelos de requisição e algorítmo
import MAISLIDAS from '../../Modules/MaisLidas/MaisLidas';
import Covid from '../../Modules/Covid19Component/Covid19Component';


import './HomeComponent.css'
import './AsideStyle.css'
import  './tabelCovid.css'



function HomeComponent() {
    const [stop, setStop] = useState(false)
    const [post , getAxios] = Axios()
    const [covidData, getCovid] = Covid()
    const [ MaisLidas, getLidas] = MAISLIDAS()
    const dispatch = useDispatch()
    const dataRedux = useSelector(state=>state.Aside)
    document.title= 'Condado News'
    





    
    useEffect(()=>{
        
        if(post.length>0 && dataRedux.MaisLidas.length===0) return (getLidas(post), setStop(true))
        if(MaisLidas.length>0 && covidData.length>0) {
            dispatch({
                type: 'ADICIONA_POST',
                data: {
                    MaisLidas,
                    covidData,
                }
            })
            return
        }
        if(post.length>0 && MaisLidas.length>0) return
        
        
        if(post.length>0 && dataRedux.MaisLidas.length>0) return
        if(stop===true) return
        
        
        if(!post) {
            getAxios({
                url: 'http://143.255.73.80:3001/posts',
                method: 'get'
            })
        }
        
        
        

        if(dataRedux.covidData.length>0) return
        
        
       getCovid()
     

        /*eslint-disable */
    },[stop, post])
    
    return post?(
        
        <>
        <div style={{
            margin: '0 100px',
            
        }}>           

        <Destaques key={post.id} dados={post}/>

        <div className="div-noticias">
            <ModeloComponent2>
            <div className="div-todas-matérias">Notícias</div>
        {post&&
                post.map((valor,indice)=>(
                    
                    indice<12&&(<div key={valor.id} className="home-section-central2">
                       <div className="div-img">
                        <Link to={`/noticias/${valor.slug}`}><img src={`http://143.255.73.80:3001/images/${valor.Foto.name}`} alt="imagem de destaque secundário"/></Link>
                        </div>
                        <Link to={`/noticias/${valor.slug}`}><span className="home-titulo2 display-block">{valor.title}</span></Link>
                        <Link to={`/noticias/${valor.slug}`}><span className="home-descricao2 display-block">{valor.desc}</span></Link>
                        <Link to={`/noticias/${valor.slug}`}><span className="home-data2 display-block">{valor.date}</span></Link>
                    
                    </div>)
                ))}
                    
        </ModeloComponent2>
        
        <Aside covidData={dataRedux.covidData.length>0?dataRedux.covidData:covidData} MaisLidas={dataRedux.MaisLidas.length>0?dataRedux.MaisLidas:MaisLidas} />
            </div>
            

                    <Bottom dados={post}/>
                    <Justica dados={post}/>
                    <Politica dados={post}/>
                    </div>
                    <Footer/>
        
        
                    <div className="fb-comments" data-href="http://localhost:3000/noticias" data-numposts="5" data-width="900"></div>
        </>
        
    ):<Delay />
    
}

export default HomeComponent;