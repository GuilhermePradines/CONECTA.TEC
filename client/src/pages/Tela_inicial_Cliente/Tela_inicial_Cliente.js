import React from 'react';
import './CSS/Tela_inicial_Cliente.css'; // Certifique-se de que o caminho está correto

function TelaInicialCliente() {
  return (
    <div className="container">
      

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
