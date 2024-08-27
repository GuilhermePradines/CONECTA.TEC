import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import TelaInicialCliente from "./Tela_inicial_Cliente"

import root from "./index"
import App from './Solicitar_Serviços_Cliente';
function rotas() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element = {<root/>}/>
            <Route path='/Solicitar_Serviços_Cliente' element = {<App/>}/>
            <Route path='/Tela_inicial_Cliente' element = {<TelaInicialCliente/>}/>
        </Routes>
    </BrowserRouter>
  );
};

export default rotas;
