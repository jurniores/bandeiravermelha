import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Axios from '../Modules/Request/Request';
import Errors from '../Modules/Validator/validator';
import { toast } from 'react-toastify';
import './ComponentLogin.css'

const initialState ={
    email:"",
    password:""
}

function ComponentADM(){
    
    const [dados, setDados] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();
    const [dadosRequest, get] = Axios();
     async function Envia(){
       if(await Errors(dados).length>0) return

        get({
            url: `http://143.255.73.80:3001/login`,
            method: 'post',
            header:{
                contentType: 'application/json',
            },
            data:dados

        })

    }
    function onChange(e){
        
        setDados({
            ...dados,[e.target.name]:e.target.value
        })
    }
    
    useEffect(()=>{
        if(!dadosRequest.email) return
        dispatch({type:'LOGIN_SUCCESS', data:false})
        toast.success('Logado com sucesso!')
        localStorage.setItem('users',JSON.stringify(dadosRequest))
        history.push('/')

        /*eslint-disable */
    },[dadosRequest])
    
    return (
        
    <div className="componentadm-divprincipal">
        <input 
        type="text"
        onChange={onChange}
        name="email"
        value={dados.email}
        className="componentadm-email-password"
        placeholder="Digite seu E-mail!"
           />
        <input 
        type="password"
        onChange={onChange}
        name="password"
        value={dados.password} 
        className="componentadm-email-password" 
        placeholder="Digite sua senha!"
        />
        <button onClick={Envia} className="componentadm-button">Entrar</button>
        
        
    </div>
    )
}

export default ComponentADM;