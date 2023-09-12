// incluir a dependência MYSQL
const mysql = require('mysql2');
const express = require('express');

const app = express();

// criar conexão com banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'celke_usuarios3'
  });

  // testando
connection.query(
    'SELECT * FROM `usuarios` WHERE `nome` = "antonio" AND `usuario` = "acdona" AND `email` = "acdona@hotmail.com"',
    function(err, rows) {
        if(!err) {
            console.log("Resultado:", rows);

        } else {
            console.log("Erro:");
        }
    }
  );

connection.connect(function (err) {
    console.log("Conexão com o banco de dados realizado com sucesso!"); 
})

app.listen(8000, () => {
    console.log("Porta 8000")
})
