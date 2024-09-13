import axios from 'axios';
import { jwtDecode } from 'jwt-decode';


const API_URL = 'http://localhost:3001/api';

const login = async (dados) => {
  const { data } = await axios.post(`${API_URL}/login`, dados);
  if (data.token) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    localStorage.setItem('role', data.user.role);
  }
  return data;
};



const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  localStorage.removeItem('role');
};

export const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    if (!token) return false;
  
    try {
      const { exp } = jwtDecode(token); 
      if (Date.now() >= exp * 1000) {
        localStorage.removeItem('token');
        localStorage.removeItem('role'); 
        return false;
      }
      return true;
    } catch (error) {
      return false;
    }
  };

  export const getUserRole = () => {  
    return localStorage.getItem('role'); 
  };

const getUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export default { login, logout, isAuthenticated , getUser , getUserRole};
