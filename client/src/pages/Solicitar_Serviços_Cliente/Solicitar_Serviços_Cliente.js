import './Solicitar_Serviços_Cliente.css';
import React, {useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function SolicitarServiçosCliente() {
  const [values, setvalues] = useState();
  const navigate = useNavigate()


  const handlechangevalues = (value) =>{
    setvalues(prevalue=>({
      ...prevalue,
      [value.target.name]:value.target.value,
      
    }))
  }


  const handleclikbutton = () =>{
    axios.post("http://localhost:3001/solicitacao",{
      equipamento:values.equipamento,
      servico:"",
      observacoes:values.observacoes,
      valor: '0',
      parecer_tec: "",
      status_c: "ANÁLISE PENDENTE",
      status_t :"PENDENTE",
    }).then((Response)=>{navigate("/Tela_inicial_Cliente")
      
    });

  }
  return (
    <>
      <div className="container">
        
        <main>
          <form onSubmit ={handleclikbutton}>
            <div id="form">
              <div>
                <label htmlFor="equipamento">Equipamento:</label><br />
                <input type="text" maxLength="30" id="equipamento" name="equipamento" className="equipamento" onChange={handlechangevalues} required/>
              </div>
              {/* <div>
                <label htmlFor="servico">Serviço:</label><br />
                <input type="text" maxLength="30" id="servico" name="servico" className="servico" onChange={handlechangevalues} required/>
              </div> */}
              <div>
                <label htmlFor="observacoes">MOTIVOS/OBSERVAÇÕES:</label><br />
                <textarea id="observacoes" maxLength="30" name="observacoes" cols="60" rows="20" className="observacoes" onChange={handlechangevalues} required></textarea>
              </div>
              <div id="botao_1">
                <button type="submit" className="butao" >Solicitar</button>
              </div>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}


export default SolicitarServiçosCliente;
