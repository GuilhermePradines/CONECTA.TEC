import './stylee.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header (){

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('role');
        navigate("/login")
  };
    return(
        <div className="container">
            <header className='header'>
            <h1>CONECTA.Tec</h1>
            <div className="user-info">
                <span className="user-icon">👤</span>
                <span className="user-name">Cliente</span>
                <button onClick={logout} >Sair</button>
            </div>
            </header>
            <nav>
                <ul>
                    <li><Link to="/SolicitarServiçosCliente">Nova Solicitações</Link></li>
                    <li><Link to="/Tela_inicial_Cliente">Solicitações</Link></li>
                    {/* <li><Link to="/Tela_de_Analises_Cliente">Análises</Link></li> */}
                </ul>
            </nav>
        </div>
    );
}

export default Header