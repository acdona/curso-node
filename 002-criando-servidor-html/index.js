const http = require('http')
const port = 8080
const hostname = 'localhost'
const server = http.createServer((req, res) => {
    res.end("<head><meta charset='utf-8'></head><h1>Página inicial do site!</h1>")
})

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`)
// })

server.listen(8080)
