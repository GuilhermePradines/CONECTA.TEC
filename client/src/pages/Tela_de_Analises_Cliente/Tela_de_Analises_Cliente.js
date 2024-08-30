import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";
import Tabela_Analise from "../../components/Tabelas/Tabela_Analise";
function Tela_de_Analises_Cliente(){
    const [listItens,setListItens] = useState ([]);
  

    useEffect(()=>{
        async function fetchData(){
          const response = await axios.get("http://localhost:3001/getta")
      
          setListItens(response.data)
          console.log(response.data)
        }
        fetchData()
    },[])
    return(
    
    <div className="container">
      <div className="t">
        <Tabela_Analise dados = {listItens}/>
      </div>
    </div>


    );
}; export default Tela_de_Analises_Cliente;