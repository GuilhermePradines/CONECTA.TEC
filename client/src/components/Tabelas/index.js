import React from "react";
import "./solicitar.css"
import { Link } from "react-router-dom";

export default function Tabela({ dados }) {
  

  return (
    <table border="1">
      <thead>
        <tr>
          <th>OS</th>
          <th>Equipamento</th>
          <th id="status">Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {dados.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.equipamento}</td>
            <td>{item.status_c}</td>
            <td>
              <Link to={`/V_solicitacao/${item.id}`}>
                edit
              </Link>
            </td> 
          </tr>
        ))}
      </tbody>
    </table>
  );
}
