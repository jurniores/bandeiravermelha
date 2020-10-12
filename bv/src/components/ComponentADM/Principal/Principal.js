import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';



//Components dinâmicos pagina adm

const LateralADM = dynamic(() => import('../LateralADM/LateralADM'));
const MinhasPostagens = dynamic(() => import('../MinhasPostagens/MinhasPostagens'));
const Postagens = dynamic(() => import('../Postagens/Postagens'));

const initialState ={
    title:"",
    desc:"",
    slug:"",
    tipo:"",
    text:"",
    author:"",
    user_id:"",
    tags:""
}

function PrincipalADM(){
    const [validaAreaAdm, setValidaAreaAdm ] = useState(null);
    const [dadosDaPostagem, setDadosDaPostagem ] = useState(initialState);

    function mudaArea(n){
        setValidaAreaAdm(n)
    }
    function editaPost(n){
        setDadosDaPostagem(n)
    }

    
return (

<div className="principal-adm">
    <LateralADM
    mudaArea={(n)=>{
        mudaArea(n)
    }}
    validaAreaAdm={validaAreaAdm}
    editaPost={(dados)=>{
        editaPost(dados)
    }}
    
    />
    {validaAreaAdm===null&&
    <MinhasPostagens 
    mudaArea={(n)=>{
        mudaArea(n)
    }}
    editaPost={(dados)=>{
        editaPost(dados)
    }}
    />
    
    }
    {validaAreaAdm===2&&
    <Postagens
    dadosDaPostagem={dadosDaPostagem}
    validaAreaAdm={validaAreaAdm} 
    />
      } 
    
</div>
)
}

export default PrincipalADM;