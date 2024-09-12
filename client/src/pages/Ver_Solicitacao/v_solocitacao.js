import React, { useState,useEffect } from 'react';
import './v_solicitacao.css';

import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function V_Solicitacao() {
  const {id} = useParams();
  
  const [values,SetValues] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    axios.get(`http://localhost:3001/Tela_tecnico/${id}`)
      .then(response => {
        SetValues(response.data); 
      })
      .catch(err => {
        console.error("Erro na requisição:", err);
      });
  }, [id]);

  const handleclikbuttonAceito = () => {
    axios.put(`http://localhost:3001/editc/${id}`, { // Incluindo o ID na URL
        status_t:"Aceito",
    })
    .then((response) => {
        navigate("/Tela_inicial_Cliente")
        console.log(response);
    })
    .catch((err) => {
        console.error("Erro na requisição:", err);
    });
}

const handleclikbuttonRecusado = () => {
  axios.put(`http://localhost:3001/editc/${id}`, { 

      status_t:"Recusado",
  })
  .then((response) => {
      navigate("/Tela_inicial_Cliente")
      console.log(response);
  })
  .catch((err) => {
      console.error("Erro na requisição:", err);
  });
}

const handleclikbuttonCancelado = () => {
  axios.put(`http://localhost:3001/editc/${id}`, { 

      status_t:"Cancelado",
  })
  .then((response) => {
      navigate("/Tela_inicial_Cliente")
      console.log(response);
  })
  .catch((err) => {
      console.error("Erro na requisição:", err);
  });
}


return (
  <div className="V_solicitacao-container">
    <div className="V_solicitacao-content">
      <label>Equipamento:</label>
      <p>{values.equipamento}</p><br/>

      <label>Serviço:</label>
      <p>{values.servico}</p><br/>

      <label>Observações:</label>
      <p>{values.observacoes}</p><br/>

     
      <p><b>Valor:</b>R$ {values.valor}</p><br/>
      
      <label>Parecer Tec:</label>
      <p>{values.parecer_tec}</p>
    </div>
    
    <div className="V_solicitacao-buttons">
    {values.status_c === "ANÁLISE FINALIZADA" && (
      <div className="V_solicitacao-buttons">
        <button className="accept" onClick={handleclikbuttonAceito}>Aceitar</button>
        <button className="reject" onClick={handleclikbuttonRecusado}>Recusar</button>
      </div>
    )}
      <button className="delete" onClick={handleclikbuttonCancelado}>Cancelar</button>
    </div>
    
  </div>
);


}

export default V_Solicitacao;
