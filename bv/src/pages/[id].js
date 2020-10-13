import {useRouter} from 'next/router';
import ComponentNoticias from '../components/ComponentNoticias/ComponentNoticias';
import Head from 'next/head';


export default function Noticias({params, DadosNoticias, post, PernambucoCovid, BrasilCovid}){

    const router = useRouter()
    const { id } = router.query


    return (
    <>
    <Head>
      <title>
        {id.toUpperCase()}
      </title>
    </Head>
    <ComponentNoticias
    id={id}
    DadosNoticias={id !='noticias'?DadosNoticias:post}
    post={post}
    PernambucoCovid={PernambucoCovid}
    BrasilCovid={BrasilCovid}
    params={params}
    />
    </>
    )

 
    
}


export async function getStaticProps({params}) {
    var DadosNoticias
    const post = await fetch(`http://143.255.73.80:3001/posts/`).then(res=>res.json())
    const PernambucoCovid = await fetch(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/pe`).then(res=>res.json())
    const BrasilCovid = await fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil').then(res=>res.json())
    if(params.id!=='noticias') {
        DadosNoticias = await fetch(`http://143.255.73.80:3001/tipos/${params.id}`).then(res=>res.json())
    } else{DadosNoticias=''}


      return {
        props: {
          DadosNoticias,
          post,
          PernambucoCovid:PernambucoCovid,
          BrasilCovid:BrasilCovid.data,
          params: params.id
        },
      }

 
  
  }
  export async function getStaticPaths() {
    return {
      paths: [
        { params: { id:'noticias' } },
        { params: { id:'economia' } },
        { params: { id:'politica' } },
        { params: { id:'educacao' } },
        { params: { id:'justica' } }, // See the "paths" section below
      ],
      fallback: false // See the "fallback" section below
    };
  }