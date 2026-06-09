/**
 * 8. Uma pizzaria cobra por tamanho e tipo de borda.
 * Leia o tamanho da pizza (P, M ou G) e o tipo de borda
 * (tradicional ou recheada) usando switch case.
 *
 * Preços:
 * P = R$ 25,00
 * M = R$ 35,00
 * G = R$ 45,00
 *
 * Borda recheada acrescenta R$ 8,00.
 * Exiba o valor total do pedido.
 */

console.log("=============================================================");
console.log("|                    Pizzaria JS                            |");
console.log("=============================================================");

const prompt = require('prompt-sync')();

let tamanhoPizza = prompt("Informe o tamanho da pizza (P, M ou G): ").toUpperCase();
let tipoBorda = prompt("Informe o tipo da borda (tradicional ou recheada): ").toLowerCase();

let valorPizza;

switch (tamanhoPizza) {
    case "P":
        valorPizza = 25;
        break;

    case "M":
        valorPizza = 35;
        break;

    case "G":
        valorPizza = 45;
        break;

    default:
        console.log("Erro: tamanho de pizza inválido.");
        process.exit();
}

switch (tipoBorda) {
    case "tradicional":
        break;

    case "recheada":
        valorPizza += 8;
        break;

    default:
        console.log("Erro: tipo de borda inválido.");
        process.exit();
}

console.log(`Valor total do pedido: R$ ${valorPizza.toFixed(2)}`);