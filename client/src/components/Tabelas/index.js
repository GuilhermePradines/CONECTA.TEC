import React from "react";
import "./solicitar.css"
export default function Tabela({ dados }) {


  return (
    <table border="1">
      <thead>
        <tr>
          <th>OS</th>
          <th>Equipamento</th>
          <th id="status">Status</th>
        </tr>
      </thead>
      <tbody>
        {dados.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.equipamento}</td>
            <td>{item.status_c}</td> 
          </tr>
        ))}
      </tbody>
    </table>
  );
}
