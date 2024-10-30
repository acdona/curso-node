const express = require('express')
const app = express()
const port = 8080

// Criar a rota da página inicial
app.get('/', (req, res) => {
    // res.send('Página inicial do site!')
    res.sendFile(__dirname + '/src/index.html')
})

// Criar a rota da página sobre-empresa
app.get('/sobre-empresa', (req, res) => {
    res.send('Página sobre do site!')
})

// Criar a rota da página contato
app.get('/contato', (req, res) => {
    res.send('Página de contato do site!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
