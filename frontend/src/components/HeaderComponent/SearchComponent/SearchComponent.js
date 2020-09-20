import React from 'react';
import { Link } from 'react-router-dom';
import {FiSearch} from 'react-icons/fi';

import './SearchComponent.css';



function SearchComponent ({dados}) {

    
    return <div className="search-component-principal">
        {dados.length>0&&dados.map(valor=>(
            <Link key={valor.id} to={`/noticias/${valor.slug}`}><div  className="search-component-secundaria">
            <span className="search-component-secundaria-span-search"><FiSearch size="30"/></span><span  className="search-component-secundaria-span-search-title">{valor.title}</span>
            </div></Link>
        ))}
        {dados.response&&(
        <div className="search-component-secundaria">
         <span className="search-component-secundaria-span-search"><FiSearch size="30"/></span><span  className="search-component-secundaria-span-search-title">Não existe postagem!</span>
        </div>)
            }
    </div>
}

export default SearchComponent;