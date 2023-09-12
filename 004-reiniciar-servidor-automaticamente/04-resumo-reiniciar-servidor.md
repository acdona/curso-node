# Resumo reiniciar servidor
## expressjs(https://www.npmjs.com/package/nodemon)

### Instalar a dependência de forma global, "-g" significa globalmente.
### É necessário executar pelo prompt de comando
### No prompt de comando para instalação global
```
npm install -g nodemon
```

### agora no terminal
```
npm install --save-dev nodemon # or using yarn: yarn add nodemon -D
```

### para executar
```
nodemon index.js
PS C:\laragon\www\curso-node\004-reiniciar-servidor-automaticamente> nodemon index.js
[nodemon] 3.0.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node index.js`
Example app listening on port 8080
[nodemon] restarting due to changes...
[nodemon] starting `node index.js`
Example app listening on port 8080
```
