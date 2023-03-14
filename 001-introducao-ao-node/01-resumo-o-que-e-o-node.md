# O que é o Node.js
Node.js é uma plataforma de software de código aberto, construída sobre o motor de JavaScript do Google Chrome (V8), que permite aos desenvolvedores criar aplicativos de rede escaláveis e de alta performance utilizando JavaScript tanto no lado do servidor quanto no cliente.
O Node.js é ideal para construir aplicativos de rede, como servidores de applicativos wev, APIs

# Uilizando o Node.js

### index.js
```js
const productValue = 100
const discountValue = 37

const calculateDiscount = require("./modules/calculateDiscount")

const finalValue = calculateDiscount(productValue, discountValue)

console.log("O valor final é: " + finalValue)
```
### calculateDiscount.js
```js
const calculateDiscount = (productValue, discountValue) => productValue - discountValue

module.exports = calculateDiscount
```

