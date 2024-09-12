import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import './cssLogin.css';

function Login() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLoginChange = (e) => setLogin(e.target.value);
  const handleSenhaChange = (e) => setSenha(e.target.value);

  const logar = (e) => {
    e.preventDefault();
    if (login === 'admin' && senha === 'admin') {
      navigate('/Tela_inicial_Cliente');
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
            <input type="text" placeholder="Login"  id="caixa_login" value={login} onChange={handleLoginChange}/>
            
            <input type="password" placeholder="Senha" id="caixa_senha" value={senha}  onChange={handleSenhaChange} />
            
            <div id="botao">
            <Link to="/Login_Tecnico" id='butao'>Cliente</Link>
            
            <button  type="submit"  onClick={logar}  id="butao"  >
                Entrar
            </button>
            
            </div>
        </div>
        </div>
    </div>
  );
}

export default Login;
