/**
 * 7. Faça um programa que funcione como uma calculadora básica.
 * Leia dois números e uma operação desejada (+, -, *, /).
 * Usando switch case, realize a operação correspondente e exiba o resultado.
 * Trate o caso de divisão por zero e de operação inválida.
 */

console.log("=============================================================");
console.log("|                  Calculadora Básica                       |");
console.log("=============================================================");

const prompt = require('prompt-sync')();

let numero1 = parseFloat(prompt("Informe o primeiro número: "));
let numero2 = parseFloat(prompt("Informe o segundo número: "));
let operacao = prompt("Informe a operação (+, -, *, /): ");

switch (operacao) {
    case "+":
        console.log(`Resultado: ${numero1 + numero2}`);
        break;

    case "-":
        console.log(`Resultado: ${numero1 - numero2}`);
        break;

    case "*":
        console.log(`Resultado: ${numero1 * numero2}`);
        break;

    case "/":
        if (numero2 === 0) {
            console.log("Erro: divisão por zero não é permitida.");
        } else {
            console.log(`Resultado: ${numero1 / numero2}`);
        }
        break;

    default:
        console.log("Erro: operação inválida.");
}