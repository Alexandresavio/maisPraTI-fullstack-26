/**
 * Sorteie um número entre 1 e 100 com Math.random(). Usando um laço do .while, 
 * peça ao usuário para adivinhar; a cada tentativa, diga se o número é maior ou 
 * menor. Registre as tentativas em um array e, ao acertar, exiba o histórico e 
 * quantas tentativas foram necessárias. 
 */

console.log("----------------------------------------------------------");
console.log("                JOGO DE ADIVINHAÇÃO                       ");
console.log("----------------------------------------------------------");

const prompt = require("prompt-sync")();

let numeroSorteado = Math.floor(Math.random() * 100) + 1;

let tentativa;
let historico = [];

do {

    tentativa = Number(prompt("Digite um número entre 1 e 100: "));

    historico.push(tentativa);

    if (tentativa < numeroSorteado) {
        console.log("O número sorteado é maior.");
    } else if (tentativa > numeroSorteado) {
        console.log("O número sorteado é menor.");
    }

} while (tentativa !== numeroSorteado);

console.log("Parabéns! Você acertou.");
console.log(`Tentativas: ${historico.length}`);
console.log("Histórico:", historico);