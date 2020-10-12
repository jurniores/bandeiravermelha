import { useState } from 'react';






    

function ContView() {

    const [ MaisLidas, setMaisLidas ] =useState([])

       function getLidas(posts){
           
        if(posts.length<=0) return console.log('não existe dados')
        //cobtendo o mês da postagem
        const date = new Date()
        const month = (date.getMonth(0)+1)
        const dateDay = date.getDate()-7
        
    
        //definindo uma variável de conta
        let maior = 0
        var arrayPostagem = []
    
    
        for(let i of posts) {
    
            //obtendo o mês da view que foi postada
            let monthPost = Number(i.View.date.split('-')[1])
            
            //defindo o mês
            let day = Number(i.View.date.split('-')[2].split('T')[0])
            //verificando se o mês é diferente do mês postado
            
            
            if(month === monthPost && day > dateDay) {
            
                    arrayPostagem.unshift({
                        title: i.title,
                        slug: i.slug,
                        id: i.id,
                        view: i.View.view
                    })
    
                if(i.View.view>=maior){
                    maior=i.View.view
                
                }
            }  
        }

          arrayPostagem.sort(function(a, b) {
            return b.view - a.view;
          });
          
          
       setMaisLidas(arrayPostagem)
          
      
       } 
       return [MaisLidas , getLidas]
       
       
    }
    


export default ContView;