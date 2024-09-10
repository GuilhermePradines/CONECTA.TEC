
import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import TelaInicialCliente from "./pages/Tela_inicial_Cliente/Tela_inicial_Cliente"
import SolicitarServiçosCliente from "./pages/Solicitar_Serviços_Cliente/Solicitar_Serviços_Cliente"
import Header from './components/Header';
import Login from './pages/Login/Login.js';
import Tela_de_Analises_Cliente from "./pages/Tela_de_Analises_Cliente/Tela_de_Analises_Cliente.js"
import Login_Tecnico from './pages/Login_Tecnico/Login_Tecnico.js';
import Tela_tecnico from './pages/Tela_tecnico/Tela_tecnico.js';
import Header_Tecnico from './components/Header_Tecnico/Header.js';
import SolicitarAprovacaoTecnico from './pages/Solicitar_Aprovacao_Tecnico/Solicitar_Aprovacao_Tecnico.js';


function App() {
  return (
    
    <BrowserRouter>
        
        <Routes>
            <Route path='/' element = {<Login/>}/> 
            <Route path='/Login_Tecnico' element = {<Login_Tecnico/>}/>     
            <Route path='/SolicitarServiçosCliente' element = {<><Header/><SolicitarServiçosCliente/></>}/>
            <Route path='/Tela_inicial_Cliente' element={<><Header/><TelaInicialCliente /></>} />
            <Route path='/Tela_de_Analises_Cliente' element={<><Header/><Tela_de_Analises_Cliente/></>} />
            <Route path='/Tela_tecnico' element={<><Header_Tecnico/><Tela_tecnico/></>} />
            <Route path='/SolicitarAprovacaoTecnico/:id' element={<><Header_Tecnico/><SolicitarAprovacaoTecnico/></>} />
        </Routes>
        
    </BrowserRouter>
  );
  
}


export default App;
