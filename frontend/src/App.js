import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Provider } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//Páginas
import PageHome from './pages/PageHome/PageHome';
import PageHeader from './pages/PageHeader/PageHeader';
import NoticiasPath from './pages/PageNoticiasPath/PageNoticiasPath';
import Economia from './pages/PageEconomia/PageEconomia';
import Educacao from './pages/PageEducacao/PageEducacao';
import Justica from './pages/PageJustica/PageJustica';
import Noticias from './pages/PageNoticias/PageNoticias';
import PageLogin from './pages/PageLogin/PageLogin';
import PageAdm from './pages/PageAdm/PageAdm';



import Store from './Redux/Redux';


function App() {
  return (
  <Provider store={Store}>
    <BrowserRouter>
    
    <PageHeader/>
     <Switch>
       <Route exact path="/" component={PageHome}/>
       <Route exact path="/noticias" component={Noticias}/>
       <Route exact path="/noticias/:slug" component={NoticiasPath}/>
       <Route exact path="/economia" component={Economia}/>
       <Route exact path="/educacao" component={Educacao}/>
       <Route exact path="/justica" component={Justica}/>
       <Route exact path="/login" component={PageLogin}/>
       <Route exact path="/adm/adm" component={PageAdm}/>
     </Switch>
     <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
    </BrowserRouter>
  </Provider> 
   
  );
}

export default App;
