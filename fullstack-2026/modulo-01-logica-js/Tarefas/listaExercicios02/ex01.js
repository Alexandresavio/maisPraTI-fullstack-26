/**
 * Peça ao usuário um número e exiba sua tabuada completa (de 1 a 10) usando um 
 * laço for. Em seguida, pergunte se ele deseja ver outra tabuada e repita enquanto 
 * a resposta for "sim".
 */

console.log("----------------------------------------------------------");
console.log("                 MOSTRADOR DE TABUADA                     ");
console.log("----------------------------------------------------------");
const prompt = require("prompt-sync")();

let resposta;

do {
    let numero = Number(
        prompt("Deseja saber a tabuada de qual número? ")
    );

    console.log("\nTabuada do", numero);

    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }

    resposta = prompt(
        "\nDeseja consultar outra tabuada? ([s]-sim /[n]não): "
    ).toLowerCase();

} while (resposta === "s");

console.log("Programa encerrado.");