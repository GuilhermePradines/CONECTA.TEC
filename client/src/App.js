import UserServices from './services/UserServices.js';
import React from 'react';
import {BrowserRouter,Route,Routes,Navigate} from "react-router-dom"
import TelaInicialCliente from "./pages/Tela_inicial_Cliente/Tela_inicial_Cliente"
import SolicitarServiçosCliente from "./pages/Solicitar_Serviços_Cliente/Solicitar_Serviços_Cliente"
import Header from './components/Header';
import Login from './pages/Login/Login.js';
import Tela_de_Analises_Cliente from "./pages/Tela_de_Analises_Cliente/Tela_de_Analises_Cliente.js"
import Login_Tecnico from './pages/Login_Tecnico/Login_Tecnico.js';
import Tela_tecnico from './pages/Tela_tecnico/Tela_tecnico.js';
import Header_Tecnico from './components/Header_Tecnico/Header.js';
import SolicitarAprovacaoTecnico from './pages/Solicitar_Aprovacao_Tecnico/Solicitar_Aprovacao_Tecnico.js';
import V_Solicitacao from './pages/Ver_Solicitacao/v_solocitacao.js';
import ProtectedRoute from './components/ProtectedRoute.js';
import { useEffect,useState } from 'react';
import withRole from './withRole.js';

const TelaTecnicoWithRole = withRole(() => (
  <>
    <Header_Tecnico />
    <Tela_tecnico />
  </>
), ["ADMIN"]);
const WithRoleSolicitarAprovacao = withRole(() => (
  <>
    <Header_Tecnico />
    <SolicitarAprovacaoTecnico/>
  </>
), ["ADMIN"]);

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    
    const checkAuth = () => {
      const authStatus = UserServices.isAuthenticated();
      setIsAuthenticated(authStatus);
    };
    checkAuth();
  }, []);
  return (
    
    <BrowserRouter>
        
        <Routes>
          
            <Route path='/Tela_tecnico' element={<TelaTecnicoWithRole/>}/>
            <Route path='/SolicitarAprovacaoTecnico/:id' element={<WithRoleSolicitarAprovacao/>} />
            <Route path='/' element={<Navigate to='/login'/>} />
            <Route path='/login' element = {<Login/>}/> 
            <Route path='/Login_Tecnico' element = {<Login_Tecnico/>}/> 
            <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/SolicitarServiçosCliente' element={<><Header /><SolicitarServiçosCliente /></>}/>
              <Route path='/Tela_inicial_Cliente' element={<><Header/><TelaInicialCliente /></>} />
              <Route path='/Tela_de_Analises_Cliente' element={<><Header/><Tela_de_Analises_Cliente/></>} />
              <Route path='/V_solicitacao/:id'element={<><Header/><V_Solicitacao/> </>}/>
              
            <Route>
              
            </Route>
            </Route>
        </Routes>
        
    </BrowserRouter>
  );
  
}


export default App;

        