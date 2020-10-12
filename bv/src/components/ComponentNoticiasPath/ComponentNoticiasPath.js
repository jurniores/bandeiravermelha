import { useEffect, useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp} from 'react-icons/fa';
import Head from 'next/head';
import Link from 'next/link';
import AxiosRequest from '../Modules/Request/Request';
import Aside from '../HomeComponent/AsideComponent/AsideComponent';
import ComponentRelacionados from '../ComponentRelacionados/ComponentRelacionados';
import Footer from '../FooterComponent/FooterComponent';




function NoticiasPath ({url, DadosNoticias, PernambucoCovid, BrasilCovid=[], post}) {
    const [ dadosRelacionados, getRelacionados] = AxiosRequest()
    const [ AdmView, getAdmView] = AxiosRequest()
    const [ , getView] = AxiosRequest()
    const [ users, setUsers] = useState(false);

    function datePTBR(date){	
        const data2 = date.split('T')
        const dataPTBR = data2[0].split('-').reverse().join('/')
        return [dataPTBR, data2[1]]
    }
    
    function LinksSociais(){
        return (
            <div className="fb-share-button">
            <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=www.bandeiravermelha.com.br/noticias/${DadosNoticias.slug}`}>
                <span className="fb-share-button-2 facebook">
                
                <span>Compartilhar</span> 
                <FaFacebook color="white" fontSize="12pt"/>
                       
                </span>
                </a>
                <a target="_blank" href={`https://twitter.com/share?url=www.bandeiravermelha.com.br/noticias/${DadosNoticias.slug}`}>
                <span className="fb-share-button-2 twitter">
                
                <span> Compartilhar</span> 
                        <FaTwitter color="white" fontSize="12pt"/>
                        
            
                </span>
                </a>

                <a target="_blank" href={`https://api.whatsapp.com/send?text=http://www.bandeiravermelha.com.br/noticias/${DadosNoticias.slug}`}>
                <span className="fb-share-button-2 whatsapp">
                
                <span> Compartilhar</span> 
                        <FaWhatsapp color="white" fontSize="12pt"/>
                       
                </span>
                </a>
                 
            </div>
        )
    }
    function insertTags(e){
        
        const tags = e.split(',')
        const tagMudada =  tags.map((valor,index)=>(
        <Link key={index} href={`/noticias/tags/${valor}`}><a className="text-decoration-a-noticias-path"><span className="noticiasPath-tags-tags" >{valor}</span></a></Link>
        ))
        return tagMudada;
    }
    

     useEffect(()=>{
        getView({
            url: `${url}views/${DadosNoticias.View.id}`,
            method: 'put',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
             },
            data:JSON.stringify({view:AdmView.view+1})
        })
     },[AdmView])   

     useEffect(()=>{
        
        
         if(DadosNoticias.id) {
           
            getAdmView({
                 url: `${url}views/${DadosNoticias.View.id}`,
                 method: 'get',
                 headers: {
                     Accept: "application/json",
                     "Content-Type": "application/json",
                  },
             })
             getRelacionados({
                 url: `${url}tipos/${DadosNoticias.tipo}`,
                 method: 'get'
             })
         }
        
         /*eslint-disable */
     },[DadosNoticias])

    useEffect(()=>{

        if(localStorage.getItem('users')) {
            if(localStorage.getItem('users').length>0){
                setUsers(JSON.parse(localStorage.getItem('users')))
            }
        }
    },[])


    return (
        
        <>
            
         
        
        <div className="noticiasPath-divPrincipal">
            <Head>
            <title>{DadosNoticias.title}</title>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:site" content="http://www.bandeiravermelha.com.br" />
            <meta name="twitter:title" content={DadosNoticias.title} />
            <meta name="twitter:description" content={DadosNoticias.desc}/>
            <meta name="twitter:image" content='https://midia.agoranordeste.com.br/uploads/imagens/cidades/recife/cabeleleira_trans_assassinada.jpg?1602164614717'/>
            <meta property="og:locale" content="pt-BR" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={DadosNoticias.title} />
            <meta property="og:description" content={DadosNoticias.desc}/>
            <meta property="og:url" content={`http://www.bandeiravermelha.com.br/noticias/${DadosNoticias.slug}`} />
            <meta property="og:site_name" content="Bandeira Vermelha" />
            <meta property="article:tag" content="BDV" />
            <meta property="article:tag" content="BDV" />
            <meta property="fb:app_id" content="2713921228849683" />
            <meta property="og:image" content={`${url}images/${DadosNoticias.Foto.name}`} />
            <meta property="og:image:secure_url" content={`${url}images/${DadosNoticias.Foto.name}`} />
            </Head>
            
             <div className="noticiaPath-divSecundaria-block">
            {users.name&&<div><span>Views:</span> <span className="views-postagem-noticias-path">{AdmView.view}</span></div>}
            <h1 className="noticiaPath-divSecundaria-title">
                {DadosNoticias.title}
                </h1>
                <h2 className="noticiaPath-divSecundaria-desc">
                {DadosNoticias.desc}
                </h2>
                <hr/>
                
                <small className="noticiasPath-date">Por <b style={{color: 'red'}}>CN</b>  {datePTBR(DadosNoticias.created_at)[0]} {datePTBR(DadosNoticias.created_at)[1].slice(0,-8)}</small>
                {LinksSociais()}
                 
                <hr/>
                <img className="noticiaPath-divSecundaria-block-img" src={`${url}images/${DadosNoticias.Foto.name}`}/>
                
                <div className="noticiaPath-divSecundaria-text" dangerouslySetInnerHTML={{__html: DadosNoticias.text}}></div>
                <ComponentRelacionados dadosRelacionados={dadosRelacionados} />
                {LinksSociais()}
                <div  className='noticiasPath-tags'>
                    <div className='noticiasPath-tags-name'>TAGS</div>
                    {insertTags(DadosNoticias.tags)}
                    <hr/>
                    </div>
                    
                    
            </div> 
            
            <div className="noticiaPath-divSecundaria-block__aside">
             <Aside post={post} BrasilCovid={BrasilCovid} PernambucoCovid={PernambucoCovid}/> 
             </div>
            
                     
        </div>
        
        <Footer/>
        
        </>
    )
}


export default NoticiasPath;