import './Header.css'
import React from 'react';
import { Link } from 'react-router-dom';
function Header_Tecnico (){
    return(
        <div className="container">
            <header className='header'>
            <h1><Link to= "/Tela_tecnico">CONECTA.Tec</Link></h1>
            <div className="user-info">
                <span className="user-icon">👤</span>
                <span className="user-name">Tecnico</span>
                <Link to= "/">Sair</Link>
            </div>
            </header>
            <nav className='nav'>
                <ul>
                    
                </ul>
            </nav>
        </div>
    );
}

export default Header_Tecnico