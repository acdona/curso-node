const http = require('http')
const port = 8080
const hostname = 'localhost'
const server = http.createServer((req, res) => {   
    res.end("<head><meta charset='utf-8'></head><h1>Página inicial do site!</h1>")
})

server.listen(8080, () => {
    console.log(`Servidor iniciado na porta ${port}: http://${hostname}:${port}`)
})


// Função para encerrar o servidor
function stopServer() {
    server.close(() => {
        console.log('Servidor encerrado.');
        process.exit(); // Opcional, encerra o processo
    });
}

// Exemplo: Encerrar o servidor após 10 segundos
setTimeout(stopServer, 10000);
