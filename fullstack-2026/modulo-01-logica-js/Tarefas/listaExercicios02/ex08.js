/**
 * Leia uma palavra, armazene seus caracteres em um array e, percorrendo-o de 
 * trás para frente com um laço for, monte a palavra invertida. Exiba a palavra 
 * original, a invertida e informe se ela é um palíndromo. 
 */

console.log("----------------------------------------------------------");
console.log("                  VERIFICADOR DE PALÍNDROMO               ");
console.log("----------------------------------------------------------");

const prompt = require("prompt-sync")();

let palavra = prompt("Digite uma palavra: ");

let caracteres = palavra.split("");
let invertida = "";

for (let i = caracteres.length - 1; i >= 0; i--) {
    invertida += caracteres[i];
}

console.log(`Palavra original: ${palavra}`);
console.log(`Palavra invertida: ${invertida}`);

if (palavra.toLowerCase() === invertida.toLowerCase()) {
    console.log("É um palíndromo.");
} else {
    console.log("Não é um palíndromo.");
}