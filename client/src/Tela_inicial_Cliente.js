import React from 'react';
import './CSS/Tela_inicial_Cliente.css'; // Certifique-se de que o caminho está correto

function TelaInicialCliente() {
  return (
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
          <li><a href="Solicitar_Serviços_Cliente.html">Novo Serviço</a></li>
          <li><a href="Tela_inicial_Cliente.html">Solicitações</a></li>
          <li><a href="Tela_de_Analises_Cliente.html">Análises</a></li>
        </ul>
      </nav>

      <div className="t">
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tipo de Serviço</th>
              <th id="status">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AUT-333</td>
              <td>QUALIFICAÇÃO</td>
              <td>ANÁLISE PENDENTE</td>
            </tr>
            <tr>
              <td>AUT-333</td>
              <td>QUALIFICAÇÃO</td>
              <td>ANÁLISE PENDENTE</td>
            </tr>
            <tr>
              <td>AUT-333</td>
              <td>QUALIFICAÇÃO</td>
              <td>ANÁLISE PENDENTE</td>
            </tr>
            <tr>
              <td>AUT-333</td>
              <td>QUALIFICAÇÃO</td>
              <td>ANÁLISE PENDENTE</td>
            </tr>
            <tr>
              <td>AUT-333</td>
              <td>QUALIFICAÇÃO</td>
              <td>ANÁLISE PENDENTE</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TelaInicialCliente;
