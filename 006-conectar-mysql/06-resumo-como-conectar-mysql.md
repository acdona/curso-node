# Como conectar MySQL com Node.js

## npm init -y => Para criar a pasta node_modules

## npm install express--save => Para instalar o express, gerenciador de rotas

## Instalar o pacote mysql2
```
npm install mysql2
```
# Criar o app.js
```js
// incluir a dependência MYSQL
const mysql = require('mysql2');
const express = require('express');

const app = express();

// criar conexão com banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'celke_usuarios3'
  });

  // testando
/* connection.query(
    'SELECT * FROM `usuarios` WHERE `nome` = "antonio" AND `usuario` = "acdona" AND `email` = "acdona@hotmail.com"',
    function(err, rows) {
        if(!err) {
            console.log("Resultado:", rows);

        } else {
            console.log("Erro:");
        }
    }
  );
*/
connection.connect(function (err) {
    console.log("Conexão com o banco de dados realizado com sucesso!"); 
})

app.get('/', (req, res) => {
    connection.query(
        'SELECT * FROM `usuarios` WHERE `nome` = "antonio" AND `usuario` = "acdona" AND `email` = "acdona@hotmail.com"',
        function(err, rows) {
            if(!err) {
                res.send(`
                    <html>
                        <head>
                            <title>Usuários</title>
                        </head>
                        <body>
                            <h1>Lista de Usuários</h1>
                            <table border="1">
                                <tr>
                                    <th>Nome</th>
                                    <th>Usuário</th>
                                    <th>Email</th>
                                </tr>
                                ${rows.map(user => `
                                    <tr>
                                        <td>${user.nome}</td>
                                        <td>${user.usuario}</td>
                                        <td>${user.email}</td>
                                    </tr>
                                `).join('')}
                            </table>
                        </body>
                    </html>
                `);
            } else {
                res.send("Erro ao buscar usuários");
            }
        }
    );
});

app.listen(8000, () => {
    console.log("Porta 8000")
})

```
