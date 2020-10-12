import React,{ useEffect, useState } from 'react';
import { toast } from 'react-toastify';


import Request from '../../Modules/Request/Request';
import Axios from 'axios';


let users
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


function Postagens({dadosDaPostagem, validaAreaAdm}){
    const [dados, setDados] = useState(initialState)
    const [ validaOP, setValidaOP] = useState(false)
    const [dadosRequest, get ] = Request();
    const [files, setFiles ] =useState(false)
    const [ nameFile, setNameFile ] = useState('Enviar Foto...')
    
    
    function onChange(e){
        if(e.target.name === 'tipo'){
            setValidaOP(true)
        }
        if(!users) return
    setDados({
        ...dados,
        author: users.name,
            user_id: users.id,
        [e.target.name]:e.target.value
    })
    }
    function FileChange(e){
        setFiles(e.target.files[0])
        setNameFile(<span style={{color:'white', textShadow:'3px 3px 3px black', fontSize:'15pt'}}>Selecionada!</span>)
    }
      async function Envia(){
        
        if(!users) return
        const errors = []
        if(dados.title==='') {
            toast.warning('Insira um titulo!')
            errors.push(1)
        } 
        if(dados.desc==='') {
            toast.warning('Insira uma descrição!')
            errors.push(1)
        }
        if(dados.slug==='') {
            toast.warning('Insira um slug!')
            errors.push(1)
        }
        if(dados.tipo==='') {
            toast.warning('Insira um tipo!')
            errors.push(1)
        }
        if(dados.text==='') {
            toast.warning('Insira um texto!')
            errors.push(1)
        }
        if(!files && !dadosDaPostagem[0]) {
            toast.warning('Insira uma imagem!')
            errors.push(1)
        }
        if(errors.length>0) return
        
        setValidaOP(false)
        
        if(dadosDaPostagem[0]){
            const {id} = dadosDaPostagem[1]
            await get({
                url:`http://143.255.73.80:3001/posts/${id}`,
                method: 'put',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                   'Authorization': 'Bearer ' + users.token
                 },
                data:JSON.stringify(dados)
            })
           
           
            return setDados(initialState)
        }
        await get({
            url:'http://143.255.73.80:3001/posts',
            method: 'post',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
               'Authorization': 'Bearer ' + users.token
             },
            data:JSON.stringify(dados)
        })
        
       
        return setDados(initialState)
    }
    useEffect(()=>{
        
        if(dadosDaPostagem[1]) setDados(dadosDaPostagem[0])
        if(localStorage.getItem('users')) {
            if(localStorage.getItem('users').length>0){
                users  = JSON.parse(localStorage.getItem('users'))
            }
              
        }
        /*eslint-disable */
    },[])
    useEffect(()=>{
        if(dadosRequest.title) {
            toast.success('Post editado com sucesso!')
           
        }
        if(dadosRequest.success){
            const formData = new FormData();
            formData.append('foto', files)
            formData.append('id_post', dadosRequest.success.post.id)
            Axios.post('http://143.255.73.80:3001/images', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            setFiles(false)
            setNameFile('Enviar Foto...')
        toast.success('Post criado com sucesso!')
        } 
        /*eslin-disable */
    },[dadosRequest])

        return (
    <div className="postagem-principal-adm">
        
        <a href="/editor/editor.html" target="_blank"><div className="editor-texto">Editor de texto!</div></a>
        <div className="postagem-lateral-esquerda">
            <form >
        <input type="text" name="title" onChange={onChange} value={dados.title} placeholder="Digite o titulo"/>
        <input type="text" name="desc" onChange={onChange} value={dados.desc} placeholder="Digite o descrição"/>
        <input type="text" name="slug" onChange={onChange} value={dados.slug} placeholder="Digite o slug"/>
        <input type="text" name="tags" onChange={onChange} value={dados.tags} placeholder="Tags: Ex: jogos,carros,politica"/>
        <select name="tipo" onChange={onChange} >
            
            {validaOP?<option>Selecione o tipo</option>:<option value="Selecione">Selecione o tipo</option>}
            <option>Notícia</option>
            <option>Economia</option>
            <option>Educação</option>
            <option>Justiça</option>
            <option>Destaque</option>
            
            
        </select>
        {!dadosDaPostagem[0]&&<><label className="label-img" htmlFor="img-post">{nameFile}</label><input type="file" id="img-post" onChange={FileChange} className="file-img"/></>}
        <input type="button" value="Enviar" id="button-submit" onClick={Envia}/>
        </form>
        </div>
        <div className="postagem-lateral-direita">
            <textarea placeholder="Digite o texto" onChange={onChange} value={dados.text} name="text" ></textarea>
        </div>
    </div>
    )}

export default Postagens;