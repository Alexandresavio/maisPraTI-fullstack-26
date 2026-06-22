/**
 * Peça ao usuário quantos termos da sequência de Fibonacci deseja ver e exiba-os 
 * usando um laço for. Exemplo: 1, 1, 2, 3, 5, 8, 13… 
 */

console.log("----------------------------------------------------------");
console.log("                SEQUÊNCIA DE FIBONACCI                    ");
console.log("----------------------------------------------------------");

const prompt = require("prompt-sync")();

let quantidade = Number(prompt("Quantos termos deseja visualizar? "));

let anterior = 1;
let atual = 1;

for (let i = 1; i <= quantidade; i++) {

    if (i <= 2) {
        console.log(1);
    } else {
        let proximo = anterior + atual;
        console.log(proximo);

        anterior = atual;
        atual = proximo;
    }
}