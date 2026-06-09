/**
 * 4. Crie um programa que leia três números inteiros e exiba o maior deles,
 *  sem utilizar funções prontas como Math.max(). 
 */
console.log("=============================================================");
console.log("|                  Verifica o maior                         |");
console.log("=============================================================");
const prompt = require('prompt-sync')();

let valor1 = parseInt(prompt("Informe o primeiro valor:"));
console.log("=============================================================");
let valor2 = parseInt(prompt("Informe o segundo valor:"));
console.log("=============================================================");
let valor3 = parseInt(prompt("Informe o primeiro valor:"));
console.log("=============================================================");

if ((valor1 >= valor2) && (valor1 >= valor3)) {
    console.log(`O maior valor digitado foi: ${valor1}`);
}
else if ((valor2 >= valor1) && (valor2 >= valor3)) {
    console.log(`O maior valor digitado foi: ${valor2}`);
}
else {
    console.log(`O maior valor digitado foi: ${valor3}`);
}