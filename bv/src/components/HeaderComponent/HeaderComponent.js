import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai'
import {useRouter} from 'next/router';

import { toast } from 'react-toastify';
import { FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';
import { FiSearch} from 'react-icons/fi';
import Request from '../Modules/Request/Request';

import SearchComponent from './SearchComponent/SearchComponent';


function Header() {
    const [ scroll, setScroll]= useState(0);
    const [ searchDados, setSearchDados] = useState('');
    const [ openEndClose, setOpenEndClose] = useState("close-header")
    const [response, get] = Request();
    const [ validaSearch, setValidaSearch] = useState(false);
    const [user, setUser] = useState(false);
    const [valida2, setValida2] = useState(false)
    const route = useRouter()
    
    
    
   
    async function Sair(){
        
        localStorage.removeItem('users')
        toast.info('Deslogado com sucesso!')
        setValida2(!valida2)
        route.push('/')
        
    }
    
    function CloseEndOpen(n){
        if(n===1){
             setOpenEndClose("open-header")
        }else{
            setOpenEndClose("close-header")
        }
        
    }
 
useEffect(()=>{
    if(searchDados.length>0){
        get({
            url: `http://143.255.73.80:3001/search/${searchDados}`,
            method: 'GET',
        })
        setValidaSearch(true)
    }
        
    /*eslint-disable */
},[searchDados])

useEffect(()=>{
    document.addEventListener('click', ()=>{
        setValidaSearch(false)
        setSearchDados('')
    })
    window.addEventListener('scroll', ()=>{
        if((window.pageYOffset >100 && window.pageYOffset< 200) || window.pageYOffset<100) {
            setScroll(window.pageYOffset)
        }
    })
},[])

    function onChange(e){
        setSearchDados(e.target.value)
  

    }

   
   useEffect(()=>{
       
        const dadosUser = localStorage.getItem('users')
       
       if(dadosUser) {
           if(dadosUser.length>0){
            const dadosJSON = JSON.parse(dadosUser)
            if(dadosJSON) return setUser(dadosJSON)
           }
           
       }
       setUser(dadosUser)
   },[valida2, route.query])

    return (
        <>
        {scroll>10 && (
            (
                <>
                <div className="header-component animate-header" style={{
                    position: 'fixed'
                }}>
                    
                    <ul className="ul-logo">
                        <div className="outline-header" onClick={()=>CloseEndOpen(1)}><AiOutlineMenu size="25" color="white"/></div>
                    <Link href="/"><a><li className="condado-news">CN</li></a></Link>
                        
                        
                    </ul>
                    <ul className="ul-contato-login">
                        {user&&user.name&&<li>Olá {user.name}</li>}
                        
                        {user&&user.name?<Link href="/adm/adm"><a><li>Area ADM</li></a></Link>:<Link href="/login"><a><li>Login</li></a></Link>}
                        {user&&user.name?<li onClick={Sair}>Sair</li>:<li><Link href="/adm/adm"><a className="contato-header">Contato</a></Link></li>}
                        
                    </ul>
                </div>
                
                </>
            )
        )}
        <div className="header-component">
            {validaSearch&&<SearchComponent dados={response}/>}
            <ul className="ul-logo">
            <div className="outline-header" onClick={()=>CloseEndOpen(1)}><AiOutlineMenu size="25" color="white"/></div>
            <Link href="/"><a><li className="condado-news">CN</li></a></Link>
                
                
            </ul>
            <ul className="ul-contato-login">
                {user&&user.name&&<li>Olá {user.name}</li>}
            
            <li className="search-header">
                 <input type="text" onChange={onChange} value={searchDados}  placeholder="BUSCAR"/><span ><FiSearch size='20'/></span></li>
                {user&&user.name?<Link href="/adm/adm"><a><li>Area ADM</li></a></Link>:<Link href="/login"><a><li>Login</li></a></Link>}
                
                {user&&user.name?<li onClick={Sair}>Sair</li>:<li><Link href="/adm/adm"><a className="contato-header">Contato</a></Link></li>}
                
            </ul>
        </div>
        <nav className={`${openEndClose} header-component__links `}>
            <li onClick={()=>CloseEndOpen(2)} className="open-end-close-header">X</li>
            <ul>
            <Link href="/"><a><li>Home</li></a></Link>
            <Link href="/noticias"><a><li>Notícias</li></a></Link>
            <Link href="/economia"><a><li>Economia</li></a></Link>
            <Link href="/politica"><a><li>Política</li></a></Link>
            <Link href="/educacao"><a><li>Educação</li></a></Link>
                <li className="space-between"><Link href="/justica"><a>Justiça</a></Link></li>
                <li className="rede-sociais"><a href="https://www.facebook.com/antonio.jurnior/" target="_blank" rel="noopener noreferrer"><FaFacebook size="25"/></a></li>
                <li className="rede-sociais"><a href="https://www.instagram.com/antonio.jurnior/" target="_blank" rel="noopener noreferrer"><FaTwitter size="25"/></a></li>
                <li className="rede-sociais"><a href="https://twitter.com/jjurniores" target="_blank" rel="noopener noreferrer"><FaInstagram size="25"/></a></li>
            </ul>
        </nav>
        
        </>
    ) 
}

export default Header;