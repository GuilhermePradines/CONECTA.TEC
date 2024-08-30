import './Solicitar_Serviços_Cliente.css';
import React, {useState} from 'react';
import axios from "axios";



function SolicitarServiçosCliente() {
  const [values, setvalues] = useState();
  
  const handlechangevalues = (value) =>{
    setvalues(prevalue=>({
      ...prevalue,
      [value.target.name]:value.target.value,
      
    }))
  }


  const handleclikbutton = () =>{
    axios.post("http://localhost:3001/solicitacao",{
      equipamento: values.equipamento,
      Servico:values.Servico,
      observacoes:values.observacoes,

    }).then((Response)=>{console.log(Response)});

  }
  return (
    <>
      <div className="container">
        
        <main>
          <form>
            <div id="form">
              <div>
                <label htmlFor="equipamento">Equipamento:</label><br />
                <input type="text" maxLength="30" id="equipamento" name="equipamento" className="equipamento" onChange={handlechangevalues}/>
              </div>
              <div>
                <label htmlFor="Servico">Serviço:</label><br />
                <input type="text" maxLength="30" id="Servico" name="Servico" className="Servico" onChange={handlechangevalues} />
              </div>
              <div>
                <label htmlFor="observacoes">MOTIVOS/OBSERVAÇÕES:</label><br />
                <textarea id="observacoes" maxLength="30" name="observacoes" cols="60" rows="20" className="observacoes" onChange={handlechangevalues}></textarea>
              </div>
              <div id="botao_1">
                <button type="submit" className="butao" onClick ={handleclikbutton}>Solicitar</button>
              </div>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}


export default SolicitarServiçosCliente;
