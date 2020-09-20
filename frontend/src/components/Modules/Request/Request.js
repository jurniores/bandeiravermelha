import { useState, useRef } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';


export default function AxiosRequest (){
    const [ dados, setDados ] = useState(false)
    let reference = useRef(null)




    function get(config) {
    
            
            new Promise((resolve,reject)=>{
                if(reference.current){
                    clearTimeout(reference.current)
                }  
                reference.current= setTimeout(async ()=>{
                    try{
                        let resolve2 = await axios(config)
                        resolve(setDados(resolve2.data))
                    }
                    catch(e){
                        if(e.response.data.errors){
                            const errors =e.response.data.errors
                            return errors.map(valor=>{
                                return toast.error(valor)
                            })
                        } 
                        reject(setDados(e))
                    }
                },500)
            })
                   
                    
                
       
               
           
               
            
   
       
    }

    return [dados, get]
}