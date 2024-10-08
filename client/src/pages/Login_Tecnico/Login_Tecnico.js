import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import './Login_Tecnico.css';


function Login_Tecnico() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLoginChange = (e) => setLogin(e.target.value);
  const handleSenhaChange = (e) => setSenha(e.target.value);

  const logar = (e) => {
    e.preventDefault();
    if (login === 'admin' && senha === 'admin') {
      navigate('/Tela_tecnico');
    } else {
      alert('Usuário ou senha incorretos');
    }
  };

  return (
    <div className='body'>
        <div id="geral">
        <header className='header1'>
            <h1 id="logo">CONECTA. TEC</h1>
        </header>
        <div id="logar">
            <input
            type="text" placeholder="Login" id="caixa_login" value={login} onChange={handleLoginChange}  />
            <input type="password" placeholder="Senha" id="caixa_senha" value={senha} onChange={handleSenhaChange} />
            <div id="botao">
            <Link to="/" id='butao'>TÉCNICO</Link>
            <button type="submit" onClick={logar} id="butao">
                Entrar
            </button>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Login_Tecnico;
