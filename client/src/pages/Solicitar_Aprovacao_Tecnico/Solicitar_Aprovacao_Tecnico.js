import React, { useState,useEffect } from 'react';
import './Solicitar_Aprovacao_Tecnico.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function SolicitarAprovacaoTecnico() {
  const {id} = useParams();
  const [dado,SetDados] = useState({});
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
  const handlechangedodos = (dado) =>{
    SetDados(predado=>({
      ...predado,
      [dado.target.name]:dado.target.value,
      
    }))
  }

  const handleclikbutton = () => {
    axios.put(`http://localhost:3001/edit/${id}`, {
        servico: dado.servico,
        valor: dado.valor,
        parecer_tec: dado.parecer_tec,
        status_c: "ANÁLISE FINALIZADA",
    })
    .then((response) => {
        navigate("/Tela_tecnico")
        console.log(response);
    })
    .catch((err) => {
        console.error("Erro na requisição:", err);
    });
}

return (
    <div className="solicitarAprovacaoContainer">
      <main className="solicitarAprovacaoMain">
        <form
          className="solicitarAprovacaoForm"
          onSubmit={(e) => {
            e.preventDefault(); 
            handleclikbutton();
          }}
        >
          <label>Equipamento:</label>
          <p>{values.equipamento}</p><br/>
          
          <label>Observações:</label>
          <p>{values.observacoes}</p><br/>

          <label htmlFor="servico">Serviço:</label>
          <input
            maxLength="50"
            type='text'
            className="servico"
            name='servico'
            onChange={handlechangedodos}
            required
          />

          <label htmlFor="valor">Valor:</label>
          <input
            type='number'
            id="valor"
            className="valor"
            onChange={handlechangedodos}
            required
            name='valor'
          />

          <label htmlFor="parecer">Parecer Tec.:</label>
          <textarea
            id="parecer"
            className="parecer"
            onChange={handlechangedodos}
            required
            name='parecer_tec'
            maxLength="200"
          ></textarea>

          {/* <label htmlFor="certificado">Anexar Certificado:</label>
          <input
            type="file"
            id="certificado"
            name="certificado"
            onChange={handlechangedodos}
          /> */}

          <button type="submit">
            Solicitar Aprovação
          </button>
        </form>
      </main>
    </div>
  );
}

export default SolicitarAprovacaoTecnico;
