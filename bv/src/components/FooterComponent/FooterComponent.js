import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';

function Footer () {
    return (
        <footer>
            <div className="div-footer">
                <ul className="ul-1">
                    <li>Home</li>
                    <li>Notícias</li>
                    <li>Economia</li>
                    <li>Educação</li>
                    <li>Justiça</li>
                </ul>
                <ul className="ul-2">
                    <li>Fale Conosco</li>
                    
                </ul>
                <ul className="redes-sociais">
                <li><FaFacebook/></li>
                <li><FaTwitter/></li>
                <li><FaInstagram/></li>
                <li></li>
                </ul>
            </div>
           <span>&copy;Todos os direitos são  reservador a</span>
        </footer>
    )
}

export default Footer