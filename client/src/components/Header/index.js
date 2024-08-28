import './style.css'
import React from 'react';
import { Link } from 'react-router-dom';
function Header (){
    return(
        <div className="container">
            <header>
            <h1>CONECTA.Tec</h1>
            <div className="user-info">
                <span className="user-icon">👤</span>
                <span className="user-name">Cliente</span>
                <a href="index.html" className="logout">Sair</a>
            </div>
            </header>
            <nav>
                <ul>
                    <li><Link to="/">Nova Solicitações</Link></li>
                    
                    <li><Link to="/Tela_inicial_Cliente">Solicitações</Link></li>
                    <li><Link to="/Analises">Análises</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header