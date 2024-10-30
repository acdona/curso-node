# Resumo Como carregar HTML com Node.js
## Apenas mudar as rotas para o caminho do arquivo HTML
## E o res.send para res.sendFile(__dirname + '/src/index.html')
```js
// Criar a rota da página inicial
app.get('/', (req, res) => {
    // res.send('Página inicial do site!')
    res.sendFile(__dirname + '/src/index.html')
})
```
