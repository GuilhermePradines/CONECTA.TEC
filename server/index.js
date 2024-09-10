const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require('cors');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "CONECTA_TEC_COMPLETO",
});

app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.post("/solicitacao", (req, res) => {
    const { equipamento, servico, observacoes , valor, parecer_tec, status_c, status_t } = req.body;

    const sql = "INSERT INTO solicitacao (equipamento, servico, observacoes,valor,parecer_tec,status_c,status_t) VALUES (?, ?, ?, ?, ?, ?, ?)";
    console.log(req.body)
    db.query(sql, [equipamento, servico, observacoes,valor , parecer_tec, status_c, status_t], (err, result) => {
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
