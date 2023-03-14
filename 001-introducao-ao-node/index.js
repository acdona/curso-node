console.log("olá mundo")

const client =  "ACD"

console.log("Cliente: " + client)

const productValue = 100
const discountValue = 37

const calculateDiscount = require("./modules/calculateDiscount")

const finalValue = calculateDiscount(productValue, discountValue)

console.log("O valor final é: " + finalValue)
