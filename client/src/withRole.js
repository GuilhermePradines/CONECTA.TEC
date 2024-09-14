
import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated, getUserRole } from './services/UserServices';

const withRole = (WrappedComponent, allowedRoles) => {
  return (props) => {
    if (!isAuthenticated()) {
      return <Navigate to="/login" />;
    }

    const userRole = getUserRole();
    if (!allowedRoles.includes(userRole)) {
      return alert('voce não tem permissão'), <Navigate to="/login" /> 
      ;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withRole;
