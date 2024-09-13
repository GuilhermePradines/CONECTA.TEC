import React, { useEffect, useState } from 'react';
import './Tela_inicial_Cliente.css'; 
import axios from 'axios';
import Tabela from '../../components/Tabelas';
import {jwtDecode} from 'jwt-decode'; // 

function TelaInicialCliente() {
    const [listItens, setListItens] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const token = localStorage.getItem('token'); 
            
            if (token) {
                try {
                    
                    const decodedToken = jwtDecode(token);
                    const userId = decodedToken.id; 
                    
                    
                    const response = await axios.get("http://localhost:3001/getcliente", {
                        headers: {
                            Authorization: `Bearer ${token}` 
                        }
                    });

                    setListItens(response.data);
                    
                    
                } catch (error) {
                    console.error('Erro ao buscar as solicitações', error);
                }
            } else {
                console.error('Token não encontrado');
            }
        }
        fetchData();
    }, []);

    return (
        <div className="container">
            <div className="t">
                <Tabela dados={listItens} />
            </div>
        </div>
    );
}

export default TelaInicialCliente;

