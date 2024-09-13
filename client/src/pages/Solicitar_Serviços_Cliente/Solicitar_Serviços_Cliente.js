import './Solicitar_Serviços_Cliente.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; // Use a importação correta

function SolicitarServiçosCliente() {
  const [values, setValues] = useState({});
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  const handleChangeValues = (event) => {
    setValues(prevValues => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    const getUserIdFromToken = () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const decoded = jwtDecode(token);
          console.log(decoded); // Verifique o conteúdo decodificado
          setUserId(decoded.id); // Ajuste conforme o nome correto no payload
        } catch (error) {
          console.error('Erro ao decodificar o token', error);
        }
      }
    };

    getUserIdFromToken();
  }, []);

  const handleClickButton = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3001/solicitacao", {
      equipamento: values.equipamento,
      servico: "",
      observacoes: values.observacoes,
      valor: '0',
      parecer_tec: "",
      status_c: "ANÁLISE PENDENTE",
      status_t: "PENDENTE",
      id_users: userId,
    }).then(() => {
      navigate("/Tela_inicial_Cliente");
    }).catch(error => {
      console.error('Erro ao enviar solicitação', error);
    });
  };

  return (
    <div className="container">
      <main>
        <form onSubmit={handleClickButton}>
          <div id="form">
            <div>
              <label htmlFor="equipamento">Equipamento:</label><br />
              <input type="text" maxLength="50" id="equipamento" name="equipamento" className="equipamento" onChange={handleChangeValues} required />
            </div>
            <div>
              <label htmlFor="observacoes">MOTIVOS/OBSERVAÇÕES:</label><br />
              <textarea id="observacoes" maxLength="200" name="observacoes" cols="60" rows="20" className="observacoes" onChange={handleChangeValues} required></textarea>
            </div>
            <div id="botao_1">
              <button type="submit" className="butao">Solicitar</button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

export default SolicitarServiçosCliente;
