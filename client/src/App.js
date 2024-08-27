
import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import TelaInicialCliente from "./pages/Tela_inicial_Cliente/Tela_inicial_Cliente"
import SolicitarServiçosCliente from "./pages/Solicitar_Serviços_Cliente/Solicitar_Serviços_Cliente"
import Header from './components/Header';





function App() {
  return (
    
    <BrowserRouter>
        <Header/>
        <Routes>          
            <Route path='/' element = {<SolicitarServiçosCliente/>}/>
            <Route path='/Tela_inicial_Cliente' element = {<TelaInicialCliente/>}/>
        </Routes>
    </BrowserRouter>
  );
  
}


export default App;
