import Router from 'next/router'
import Head from 'next/head'
import dynamic from 'next/dynamic';
import NProgress from 'nprogress'

import { ToastContainer } from 'react-toastify'
//importações de css
import  '../../public/ComponentCarregando.css'
import  '../../public/ComponentFooter.css'
import  '../../public/ComponentHeader.css'
import  '../../public/ComponentPaginaHome.css'
import '../../public/ComponentNoticiasPath.css'
import '../../public/ComponentRelacionados.css'
import '../../public/ComponentNoticias.css'
import '../../public/ComponentLogin.css'
import '../../public/PrincipalADM.css'
//CSS responsivos

import '../../public/ViewTablesCss/ResponsivePaginaHome.css'
import '../../public/ViewTablesCss/MobileResponsive.css'
import '../../public/ViewTablesCss/ResponsiveNoticiasPath.css'

import 'react-toastify/dist/ReactToastify.css'





//Modulos meus
const Header = dynamic(() => import('../components/HeaderComponent/HeaderComponent'));


Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Import CSS for nprogress */}
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <ToastContainer/>
      <Header/>
      <Component {...pageProps} />
  
      
    </>
  )
}
