import React from "react";
import { Link } from "react-router-dom";

export default function Tabela_T({ dados }) {


  return (
    <table border="1">
      <thead>
        <tr>
          <th>OS</th>
          <th>Equipamento</th>
          <th>Tipo Serviço</th>
          <th>Valor</th>
          <th id="status">Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {dados.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.equipamento}</td>
            <td>{item.servico}</td> 
            <td>R$ {item.valor}</td> 
            <td>{item.status_t}</td>
            <td>
              <Link to={`/SolicitarAprovacaoTecnico/${item.id}`} className="link">
                ..
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
