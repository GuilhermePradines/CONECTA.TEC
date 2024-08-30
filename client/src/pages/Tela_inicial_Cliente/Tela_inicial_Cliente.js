import React,{useEffect, useState} from 'react';
import './Tela_inicial_Cliente.css'; // Certifique-se de que o caminho está correto
import axios from 'axios';
import Tabela from '../../components/Tabelas';



function TelaInicialCliente() {
  const [listItens,setListItens] = useState ([]);
  

  useEffect(()=>{
      async function fetchData(){
        const response = await axios.get("http://localhost:3001/getta")
    
        setListItens(response.data)
        console.log(response.data)
      }
      fetchData()
  },[])
  
  return (

  

    <div className="container">
      <div className="t">
        <Tabela dados = {listItens}/>
      </div>
    </div>
  );
};

export default TelaInicialCliente;
