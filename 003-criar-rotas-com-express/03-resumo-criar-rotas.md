# Resumo criando rotas
## expressjs(https://expressjs.com/pt-br/starter/installing.html)

## Criar o aquivo index.js

### No terminal digitar
```TERMINAL
npm init
```

### Ir dando enter até o finale será criado o arquivo package.json

## Gerencia as requisições, rotas e URLs, entre outras funcionalidades
### no terminal: 
```TERMINAL 
npm install express --save
```

## Configurando as rotas
```JAVASCRIPT
const express = require('express')
const app = express()
const port = 8080

// Criar a rota da página inicial
app.get('/', (req, res) => {
    res.send('Página inicial do site!')
})

// Criar a rota da página sobre-empresa
app.get('/sobre-empresa', (req, res) => {
    res.send('Página sobre do site!')
})

// Criar a rota da página contato
app.get('/contato', (req, res) => {
    res.send('Página contato do site!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
```

## O diretório node_modules, pode ser apagado.
## para recuperá-lo é só executar 
```
npm install
```

## Rodar o projeto
```
node index.js
```

