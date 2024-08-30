import React from "react";

export default function Tabela_T({ dados }) {


  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Equipamento</th>
          <th>Tipo Serviço</th>
          <th>Valor</th>
          <th id="status">Status</th>
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
          </tr>
        ))}
      </tbody>
    </table>
  );
}
