import React from "react";

export default function Tabela({ dados }) {
  console.log("diogo é gado");
  console.log(dados); // Imprime os dados passados como prop

  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Tipo de Serviço</th>
          <th id="status">Status</th>
        </tr>
      </thead>
      <tbody>
        {dados.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.equipamento}</td>
            <td>{item.Servico}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
