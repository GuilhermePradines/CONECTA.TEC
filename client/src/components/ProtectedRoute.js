import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import UserServices from '../services/UserServices';

const ProtectedRoute = () => {
    // Verifica a autenticação diretamente no localStorage
    const isAuthenticated = UserServices.isAuthenticated();
  
    return isAuthenticated ? <Outlet /> : <Navigate to='/login' /> ;
    
  };
  
  export default ProtectedRoute;