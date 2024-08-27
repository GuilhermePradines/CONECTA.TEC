import './style.css'

function Header (){
    return(
        <div className="container">
            <header>
            <h1>CONECTA.Tec</h1>
            <div className="user-info">
                <span className="user-icon">👤</span>
                <span className="user-name">Cliente</span>
                <a href="index.html" className="logout">Sair</a>
            </div>
            </header>
            <nav>
            <ul>
                <li><a href="Solicitar_Serviços_Cliente.html">Novo Serviço</a></li>
                <li><a href="Tela_inicial_Cliente.js">Solicitações</a></li>
                <li><a href="Tela_de_Analises_Cliente.html">Análises</a></li>
            </ul>
            </nav>
        </div>
    );
}

export default Header