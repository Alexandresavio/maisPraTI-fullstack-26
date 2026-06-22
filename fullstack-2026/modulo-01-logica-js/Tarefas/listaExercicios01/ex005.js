/**
 * 5. Uma loja oferece desconto progressivo conforme o valor da compra.
 * Compras abaixo de R$ 100,00 não têm desconto;
 * Compras entre R$ 100,00 e R$ 299,99 recebem 10% de desconto;
 * Compras entre R$ 300,00 e R$ 499,99 recebem 15% de desconto;
 * Compras acima de R$ 500,00 recebem 20% de desconto.
 * Exiba o valor original, o desconto aplicado e o valor final a pagar.
 */

console.log("=============================================================");
console.log("|                 Calculadora de Descontos                  |");
console.log("=============================================================");

const prompt = require('prompt-sync')();

let valorCompra = parseFloat(prompt("Informe o valor total da compra: "));
let percentualDesconto;

if (valorCompra < 100) {
    percentualDesconto = 0;
} else if (valorCompra < 300) {
    percentualDesconto = 10;
} else if (valorCompra < 500) {
    percentualDesconto = 15;
} else {
    percentualDesconto = 20;
}

let valorDesconto = valorCompra * percentualDesconto / 100;
let valorFinal = valorCompra - valorDesconto;

console.log(`Valor original da compra: R$ ${valorCompra.toFixed(2)}`);
console.log(`Desconto aplicado: ${percentualDesconto}%`);
console.log(`Valor do desconto: R$ ${valorDesconto.toFixed(2)}`);
console.log(`Valor final a pagar: R$ ${valorFinal.toFixed(2)}`);