import React from 'react';
import { useSelector } from 'react-redux';
import './Principal.css'
//Components da pagina adm
import LateralADM from '../LateralADM/LateralADM';
import Postagens from '../Postagens/Postagens';
import MinhasPostagens from '../MinhasPostagens/MinhasPostagens';


function PrincipalADM(){
    const {areaAdmPost} = useSelector(state=>state.AreaAdm)
    
return (

<div className="principal-adm">
    <LateralADM/>
    
    {areaAdmPost===null&&<MinhasPostagens/>}
    {areaAdmPost===2&&<Postagens/>}
    
</div>
)
}

export default PrincipalADM;