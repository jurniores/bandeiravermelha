import NoticiasPath from '../../components/ComponentNoticiasPath/ComponentNoticiasPath';
import { useRouter } from 'next/router'

import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('../404'))

const initialProps = {View:{view:''}}
export default function PageNoticiasPath ({url, post=initialProps, DadosNoticias=initialProps, PernambucoCovid, BrasilCovid}){

    const router = useRouter()
    if(router.isFallback){
      return <div>Carregando...</div>
    }

    if(DadosNoticias.Error){
      return <DynamicComponent/>
    }
    
    return (

    <NoticiasPath post={post} url={url} DadosNoticias={DadosNoticias} PernambucoCovid={PernambucoCovid} BrasilCovid={BrasilCovid} />

    )
}


export async function getStaticProps({params}) {
  
    

    const DadosNoticias = await fetch(`http://143.255.73.80:3001/posts/${params.id}`).then(res=>res.json())
    const PernambucoCovid = await fetch(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/pe`).then(res=>res.json())
    const BrasilCovid = await fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil').then(res=>res.json())
    const post = await fetch(process.env.LOCAL_DADOS+'posts').then(res=>res.json())

      return {
        props: {
          DadosNoticias,
          post,
          PernambucoCovid:PernambucoCovid,
          BrasilCovid:BrasilCovid.data,
          url: process.env.LOCAL_DADOS
        },
        revalidate:1
      }
 
  
  }
  export async function getStaticPaths() {
 
      const posts = await fetch('http://143.255.73.80:3001/posts/')
    .then(res=>res.json())
    
    
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
      params: { id: post.slug },
    }))
    
    return {
      paths,
      fallback: true // See the "fallback" section below
    }
      
   
    
  }