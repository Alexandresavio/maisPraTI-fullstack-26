/**
 * Leia um número N e exiba todos os números primos entre 2 e N usando laços 
 * aninhados (for dentro de for). Exiba também a quantidade total de primos 
 * encontrados. 
 */

console.log("----------------------------------------------------------");
console.log("               NÚMEROS PRIMOS                             ");
console.log("----------------------------------------------------------");

const prompt = require("prompt-sync")();

let numeroFinal = Number(prompt("Digite o valor de N: "));
let quantidadePrimos = 0;

for (let numero = 2; numero <= numeroFinal; numero++) {

    let ehPrimo = true;

    for (let divisor = 2; divisor < numero; divisor++) {

        if (numero % divisor === 0) {
            ehPrimo = false;
            break;
        }
    }

    if (ehPrimo) {
        console.log(numero);
        quantidadePrimos++;
    }
}

console.log(`Total de números primos: ${quantidadePrimos}`);