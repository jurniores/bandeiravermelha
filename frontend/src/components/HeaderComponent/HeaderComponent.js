import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';
import { FiSearch} from 'react-icons/fi';
import './HeaderComponent.css'
import Request from '../Modules/Request/Request';

import SearchComponent from './SearchComponent/SearchComponent';


function Header() {
    const [ scroll, setScroll]= useState(0);
    const history = useHistory()
    const [ searchDados, setSearchDados] = useState('');
    const [response, get] = Request();
    const [ validaSearch, setValidaSearch] = useState(false);
    const {valida} = useSelector(state=>state.Login);
    const dispatch = useDispatch();
    const [user, setUser] = useState(false);
    const [valida2, setValida2] = useState(false)
    
   
    async function Sair(){
        
        localStorage.setItem('users','')
        toast.info('Deslogado com sucesso!')
        dispatch({type:'LOGIN_SUCCESS', data:true})
        setValida2(!valida2)
        history.push('/')
        
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
},[])

    function onChange(e){
        setSearchDados(e.target.value)
  

    }

    window.addEventListener('scroll', ()=>{
        if((window.pageYOffset >100 && window.pageYOffset< 200) || window.pageYOffset<100) {
            setScroll(window.pageYOffset)
        }
    })
   useEffect(()=>{
       
           const dadosUser = localStorage.getItem('users')
       
       if(dadosUser) {
           if(dadosUser.length>0){
            const dadosJSON = JSON.parse(dadosUser)
            if(dadosJSON) return setUser(dadosJSON)
           }
           
       }
       setUser(dadosUser)
   },[valida,valida2])

    return (
        <>
        {scroll>10 && (
            (
                <>
                <div className="header-component animate-header" style={{
                    position: 'fixed'
                }}>
                    
                    <ul className="ul-logo">
                    <Link to="/"><li className="condado-news">CN</li></Link>
                        
                        
                    </ul>
                    <ul className="ul-contato-login">
                        {user&&user.name&&<li>Olá {user.name}</li>}
                        
                        {user&&user.name?<Link to="/adm/adm"><li>Area ADM</li></Link>:<Link to="/login"><li>Login</li></Link>}
                        {user&&user.name?<li onClick={Sair}>Sair</li>:<li>Contato</li>}
                        
                    </ul>
                </div>
                
                </>
            )
        )}
        <div className="header-component">
            {validaSearch&&<SearchComponent dados={response}/>}
            <ul className="ul-logo">
            <Link to="/"><li className="condado-news">CN</li></Link>
                
                
            </ul>
            <ul className="ul-contato-login">
                {user&&user.name&&<li>Olá {user.name}</li>}
            
            <li className="search-header">
                 <input type="text" onChange={onChange} value={searchDados}  placeholder="BUSCAR"/><span ><FiSearch size='20'/></span></li>
                {user&&user.name?<Link to="/adm/adm"><li>Area ADM</li></Link>:<Link to="/login"><li>Login</li></Link>}
                
                {user&&user.name?<li onClick={Sair}>Sair</li>:<li>Contato</li>}
                
            </ul>
        </div>
        <div className="header-component__links">
            <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/noticias"><li>Notícias</li></Link>
            <Link to="/economia"><li>Economia</li></Link>
            <Link to="/politica"><li>Política</li></Link>
            <Link to="/educacao"><li>Educação</li></Link>
                <li className="space-between"><Link to="/justica">Justiça</Link></li>
                <li className="rede-sociais"><a href="https://www.facebook.com/antonio.jurnior/" target="_blank" rel="noopener noreferrer"><FaFacebook size="25"/></a></li>
                <li className="rede-sociais"><a href="https://www.instagram.com/antonio.jurnior/" target="_blank" rel="noopener noreferrer"><FaTwitter size="25"/></a></li>
                <li className="rede-sociais"><a href="https://twitter.com/jjurniores" target="_blank" rel="noopener noreferrer"><FaInstagram size="25"/></a></li>
            </ul>
        </div>
        
        </>
    ) 
}

export default Header;