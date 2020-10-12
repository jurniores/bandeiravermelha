import HomeComponent from '../components/HomeComponent/HomePrincipal/HomeComponent';
import Head from 'next/head';



//Meus modulos



export default function PageHome({ post, PernambucoCovid, BrasilCovid}) {
  

    return (
      <>
        <Head>
        <title>Bandeira Vermelha</title>
        
        <meta property="og:locale" content="pt-BR" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content='Bandeira Vermelha' />
        <meta property="og:description" content='Aqui você encontra notícias atuais de toda a Mata Norte'/>
        <meta property="og:url" content={`http://www.bandeiravermelha.com.br`} />
        <meta property="og:site_name" content="Bandeira Vermelha" />
        <meta property="article:tag" content="BDV" />
        <meta property="article:tag" content="BDV" />
        <meta property="fb:app_id" content="2713921228849683" />
        <meta property="og:image" content={`/img/header1.png`} />
        <meta property="og:image:secure_url" content={`/img/header1.png`} />
        </Head>
        <HomeComponent
        post={post}
        PernambucoCovid={PernambucoCovid}
        BrasilCovid={ BrasilCovid }  />
        </>
    )
}


export async function getStaticProps() {
  try{
      const PernambucoCovid = await fetch(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/pe`).then(res=>res.json())
      const BrasilCovid = await fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil').then(res=>res.json())
      const post = await fetch(process.env.LOCAL_DADOS+'posts').then(res=>res.json())
      
    
      return {
          props: {
            post:post,
            PernambucoCovid:PernambucoCovid,
            BrasilCovid:BrasilCovid.data,
          },
          revalidate:1

        }

  } catch(e){
      throw Error
  }
}