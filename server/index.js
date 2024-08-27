const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require('cors');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "conecta_tec",
});

app.use(express.json());
app.use(cors()); 




app.post("/solicitacao", (req, res) => {
    const { equipamento} = req.body;
    const {Servico} = req.body;
    const {observacoes } = req.body;

    let sql = "INSERT INTO solicitacao (equipamento, Servico, observacoes) VALUES (?, ?, ?)";

    db.query(sql,[equipamento,Servico,observacoes], (err,result)=>{
        console.log(err)
    });
});

app.get("/getta", (req,res)=>{

    let sql = "SELECT * FROM solicitacao";
    db.query(sql,(err,reulst)=>{
        if(err) console.log(err);
        else res.send(reulst);
    })
})
app.listen(3001, () => {
    console.log("Server is running on port 3001");
});



