/**
 * Leia um número inteiro positivo e, usando um laço while,
 * calcule e exiba quantos dígitos ele possui.
 */

console.log("----------------------------------------------------------");
console.log("               CONTADOR DE DÍGITOS                        ");
console.log("----------------------------------------------------------");

const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um número inteiro positivo: "));
let quantidadeDigitos = 0;

if (numero === 0) {
    quantidadeDigitos = 1;
} else {
    while (numero > 0) {
        quantidadeDigitos++;
        numero = parseInt(numero / 10);
    }
}

console.log(`Quantidade de dígitos: ${quantidadeDigitos}`);