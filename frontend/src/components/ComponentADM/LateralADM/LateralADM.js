import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './LateralADM.css'

function LateralADM(){
    
    const dispatch = useDispatch();
    const {areaAdmPost} = useSelector(state=>state.AreaAdm)

    function MudaAdmPost(dados){

        dispatch({
            type: 'AREA_ADM_POST', 
            data: dados
        })
    }

    return (
    <div className="lateral-adm-principal">
        <ul className="lateral-adm-ul">
            {areaAdmPost===null?(
                <li className="lateral-adm-li" style={{
                    borderLeft: '3px solid red'
                }} onClick={()=>{
                    MudaAdmPost(null)
                }}>Minhas postagens</li>
                
            ):(
                <li className="lateral-adm-li" onClick={()=>{
                    MudaAdmPost(null)
                }}>Minhas postagens</li>
            )}

            {areaAdmPost===2?(
                <li className="lateral-adm-li" style={{
                    borderLeft: '3px solid red'
                }} onClick={()=>{
                    MudaAdmPost(2)
                }}>Nova postagem</li>
                
            ):(
                <li className="lateral-adm-li" onClick={()=>{
                    MudaAdmPost(2)
                }}>Nova postagem</li>
            )}

            {areaAdmPost===3?(
                <li className="lateral-adm-li" style={{
                    borderLeft: '3px solid red'
                }} onClick={()=>{
                    MudaAdmPost(3)
                }}>Views</li>
                
            ):(
                <li className="lateral-adm-li" onClick={()=>{
                    MudaAdmPost(3)
                }}>Views</li>
            )}

            {areaAdmPost===4?(
                <li className="lateral-adm-li" style={{
                    borderLeft: '3px solid red'
                }} onClick={()=>{
                    MudaAdmPost(4)
                }}>?</li>
                
            ):(
                <li className="lateral-adm-li" onClick={()=>{
                    MudaAdmPost(4)
                }}>?</li>
            )}
            {areaAdmPost===5?(
                <li className="lateral-adm-li" style={{
                    borderLeft: '3px solid red'
                }} onClick={()=>{
                    MudaAdmPost(5)
                }}>?</li>
                
            ):(
                <li className="lateral-adm-li" onClick={()=>{
                    MudaAdmPost(5)
                }}>?</li>
            )}
        </ul>
    </div>
    )
}

export default LateralADM;