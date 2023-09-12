const http = require('http')
const port = 8080
const hostname = 'localhost'
const server = http.createServer((req, res) => {
    res.end("<head><meta charset='utf-8'></head><h1>Página inicial do site!</h1>")
})

// server.listen(8080, () => {
//     console.log("Servidor iniciado na porta 8080: http://localhost:8080")
// })

server.listen(8080)
