import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './cssLogin.css';
import UserServices from '../../services/UserServices';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loginType, setLoginType] = useState('cliente');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await UserServices.login({ email, senha });
      if (loginType === 'cliente') {
        navigate('/Tela_inicial_Cliente');
      } else if (loginType === 'tecnico') {
        navigate('/Tela_tecnico');
      }
    } catch (error) {
      console.error('Erro de login', error);
      alert('Erro de login');
    }
  };

  return (
    <div className='body'>
      <div id="geral">
        <header className='header1'>
          <h1 id="logo">CONECTA. TEC</h1>
        </header>

        <div id="logar">
          <form onSubmit={handleSubmit} id="logar">
            <input
              type="text"
              placeholder="Login"
              id="caixa_login"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Senha"
              id="caixa_senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />

            <div id="botao">
              <button
                type="button"
                className={`btn ${loginType === 'cliente' ? 'selected' : ''}`}
                onClick={() => setLoginType('cliente')}
              >
                Cliente
              </button>
              <button
                type="button"
                className={`btn ${loginType === 'tecnico' ? 'selected' : ''}`}
                onClick={() => setLoginType('tecnico')}
              >
                Técnico
              </button>
              <button type="submit" className="btn">
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
