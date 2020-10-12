import { useState } from 'react'
import axios from 'axios'



export default function ApiCovid() {
   const [ CovidDados, setCovidDados] = useState([])
   
   async function get(){
    try{
        const covidPernambuco = await axios.get(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/pe`)
        const covidBrasil = await axios.get('https://covid19-brazil-api.now.sh/api/report/v1/brazil')
        
        
        setCovidDados([covidBrasil.data.data, covidPernambuco.data])
    } catch(e) {
        console.log(e)
    }
   } 

    return [CovidDados, get]

   
}

