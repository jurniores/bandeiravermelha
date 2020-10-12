import React, { useEffect, useState } from 'react';




function LateralADM({mudaArea, validaAreaAdm}){
    
    
    


    return (
    <div className="lateral-adm-principal">
        <ul className="lateral-adm-ul">
            {validaAreaAdm===null?(
                <li className="lateral-adm-li" style={{
                    borderLeft: '3px solid red'
                }} onClick={()=>{
                    mudaArea(null)
                }}>Minhas postagens</li>
                
            ):(
                <li className="lateral-adm-li" onClick={()=>{
                    mudaArea(null)
                }}>Minhas postagens</li>
            )}

            {validaAreaAdm===2?(
                <li className="lateral-adm-li" style={{
                    borderLeft: '3px solid red'
                }} onClick={()=>{
                    mudaArea(2)
                }}>Nova postagem</li>
                
            ):(
                <li className="lateral-adm-li" onClick={()=>{
                    mudaArea(2)
                }}>Nova postagem</li>
            )}

            {validaAreaAdm===3?(
                <li className="lateral-adm-li" style={{
                    borderLeft: '3px solid red'
                }} onClick={()=>{
                    mudaArea(3)
                }}>Views</li>
                
            ):(
                <li className="lateral-adm-li" onClick={()=>{
                    mudaArea(3)
                }}>Views</li>
            )}

            {validaAreaAdm===4?(
                <li className="lateral-adm-li" style={{
                    borderLeft: '3px solid red'
                }} onClick={()=>{
                    //MudaAdmPost(4)
                }}>?</li>
                
            ):(
                <li className="lateral-adm-li" onClick={()=>{
                   // MudaAdmPost(4)
                }}>?</li>
            )}
            {validaAreaAdm===5?(
                <li className="lateral-adm-li" style={{
                    borderLeft: '3px solid red'
                }} onClick={()=>{
                    //MudaAdmPost(5)
                }}>?</li>
                
            ):(
                <li className="lateral-adm-li" onClick={()=>{
                   // MudaAdmPost(5)
                }}>?</li>
            )}
        </ul>
    </div>
    )
}

export default LateralADM;