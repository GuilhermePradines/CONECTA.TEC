import React, { useState,useEffect } from 'react';

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

const handleclikbuttonDelete = () =>{
  axios.delete(`http://localhost:3001/delete/${id}`,{

  }).then((response)=>{
    navigate("/Tela_inicial_Cliente")
  })
}


return (
    <div className="container">
      <div>
        <p>{values.equipamento}</p>
        <p>{values.servico}</p>
        <p>{values.observacoes}</p>
        <p>{values.valor}</p>
        <p>{values.parecer_tec}</p>
               
      </div>
      <div>
        <button onClick={handleclikbuttonAceito}>Aceitar</button>
        <button onClick={handleclikbuttonRecusado}>Recusar</button>
        <button onClick={handleclikbuttonDelete}>Deletar</button>
      </div>
    </div>
);

}

export default V_Solicitacao;
