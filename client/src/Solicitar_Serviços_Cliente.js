import './CSS/Solicitar_Serviços_Cliente.css';
import React, {useState,useEffect} from 'react';
import axios from "axios";
import ta from './componetes/ta';


function App() {
  const [values, setvalues] = useState();
  
  const handlechangevalues = (value) =>{
    setvalues(prevalue=>({
      ...prevalue,
      [value.target.name]:value.target.value,
      
    }))
  }
  useEffect(()=>{
    axios.get("http://localhost:3001/getta").then((Response)=>{
      console.log(Response);
    })
  })

  const handleclikbutton = () =>{
    axios.post("http://localhost:3001/solicitacao",{
      equipamento: values.equipamento,
      Servico:values.Servico,
      observacoes:values.observacoes,

    });

  }
  return (
    <>
      <div className="container">
        <header>
          <h1>CONECTA.Tec</h1>
          <div className="user-info">
            <span className="user-icon">👤</span>
            <span className="user-name">Cliente</span>
            <a href="index.html" className="logout">Sair</a>
          </div>
        </header>
        <nav>
          <ul>
            <li><a href="Solicitar_Serviços_Cliente.html">Novo Serviço</a></li>
            <li><a href="Tela_inicial_Cliente.js">Solicitações</a></li>
            <li><a href="Tela_de_Analises_Cliente.html">Análises</a></li>
          </ul>
        </nav>
        <main>
          <form>
            <div id="form">
              <div>
                <label htmlFor="equipamento">Equipamento:</label><br />
                <input type="text" id="equipamento" name="equipamento" className="equipamento" onChange={handlechangevalues}/>
              </div>
              <div>
                <label htmlFor="Servico">Serviço:</label><br />
                <input type="text" id="Servico" name="Servico" className="Servico" onChange={handlechangevalues} />
              </div>
              <div>
                <label htmlFor="observacoes">MOTIVOS/OBSERVAÇÕES:</label><br />
                <textarea id="observacoes" name="observacoes" cols="60" rows="20" className="observacoes" onChange={handlechangevalues}></textarea>
              </div>
              <div id="botao_1">
                <button type="submit" id="butao" onClick={()=> handleclikbutton()}>Solicitar</button>
              </div>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}


export default App;
