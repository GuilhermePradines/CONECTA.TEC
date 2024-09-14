const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require('cors');
const jwt = require('jsonwebtoken');


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "conecta_teste",
});

app.use(express.json());
app.use(cors({
    origin: '*'
}));

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; 

    if (token == null) return res.status(401).json({ message: 'Token não fornecido' });

    jwt.verify(token, 'secret_key', (err, decoded) => {
        if (err) return res.status(403).json({ message: 'Token inválido' });

        req.userId = decoded.id; 
        next();
    });
};


app.post("/solicitacao", (req, res) => {
    const { equipamento, servico, observacoes , valor, parecer_tec, status_c, status_t,id_users } = req.body;

    const sql = "INSERT INTO solicitacao (equipamento, servico, observacoes,valor,parecer_tec,status_c,status_t,id_users) VALUES (?, ?, ?, ?, ?, ?, ?,?)";
    console.log(req.body)
    db.query(sql, [equipamento, servico, observacoes,valor , parecer_tec, status_c, status_t,id_users], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send({ message: "Erro ao inserir a solicitação." });
        } else {
            res.status(201).send({ message: "Solicitação inserida com sucesso!" });
        }
    });
});

app.get('/getta', (req, res) => {
    
    const sql = "SELECT * FROM solicitacao";
    db.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send({ message: "Erro ao buscar as solicitações." });
        } else {
            res.status(200).send(result);
        }
    });
});



app.get('/getcliente', verifyToken, (req, res) => {
    const userId = req.userId; 
    
    const sql = "SELECT * FROM solicitacao WHERE id_users = ?";
    db.query(sql, [userId], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send({ message: "Erro ao buscar as solicitações." });
        } else {
            res.status(200).send(result);
        }
    });
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

app.get("/Tela_tecnico/:id", (req, res) => {
    const { id } = req.params;
    const sql = "SELECT * FROM solicitacao WHERE id = ?";
    
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send({ message: "Erro ao buscar a solicitação." });
        } else if (result.length === 0) {
            res.status(404).send({ message: "Solicitação não encontrada." });
        } else {
            res.status(200).send(result[0]); 
        }
    });
});

app.put("/edit/:id", (req, res) => {
    const { id } = req.params;
    const { servico, valor, parecer_tec, status_c } = req.body;

    let sql = "UPDATE solicitacao SET servico = ?, valor = ?, parecer_tec = ?, status_c = ? WHERE id = ?";

    db.query(sql, [servico, valor, parecer_tec, status_c, id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send({ message: "Erro ao atualizar a solicitação." });
        } else {
            res.status(200).send(result);
        }
    });
});


app.put("/editc/:id", (req, res) => {
    const { id } = req.params;
    const {status_t } = req.body;

    let sql = "UPDATE solicitacao SET status_t = ? WHERE id = ?";

    db.query(sql, [status_t, id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send({ message: "Erro ao atualizar a solicitação." });
        } else {
            res.status(200).send(result);
        }
    });
});

app.delete("/delete/:id",(req,res)=>{
    const {id} = req.params;
    let sql = "DELETE FROM solicitacao WHERE id =?"
    db.query(sql,[id],(err,result)=>{
        if (err) console.log(err);
        else res.send(result);
    })
})







// Rota de login
app.post('/api/login', (req, res) => {
    const { email, senha } = req.body;
  
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
      if (err) throw err;
  
      if (results.length > 0) {
        const user = results[0];
  
        
        if (senha === user.senha) {
            
            const token = jwt.sign({ id: user.id, nome: user.nome,role:user.roles }, 'secret_key', { expiresIn: '1h' });
          
            res.json({
              token,
              user: {
                nome: user.nome,
                email: user.email,
                role: user.roles
              }
            });
          } else {
            res.status(400).json({ message: 'Senha incorreta' });
          }
      } else {
        res.status(400).json({ message: 'Usuário não encontrado' });
      }
    });
  });



  
 
  app.get('/api/protected', verifyToken, (req, res) => {
    res.json({ message: 'Acesso autorizado', userId: req.userId });
  });
  