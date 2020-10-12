import ComponentAdm from '../../components/ComponentADM/Principal/Principal';
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react';


const Erro404 = dynamic(() => import('../404'))
const initialUser = {
    token: undefined,
    email: undefined,
    id: undefined,
    name: undefined
}

export default function AreaADM(){
    const [users, setUsers] = useState(initialUser);
    

    useEffect(()=>{
         var user = localStorage.getItem('users')
         if(!user) return
         setUsers(JSON.parse(user))
    },[])
    
    if(
        typeof users.token === 'undefined'
        ||
         typeof users.email === 'undefined'
        ||
        typeof users.name === 'undefined' 
        || 
        typeof users.id === 'undefined' 
        ) return <Erro404/>

    return <ComponentAdm/>
}