/**
 * 3. Escreva um programa que pergunte o salário mensal de um funcionário e o 
 * percentual de aumento concedido pela empresa. Caso o salário seja menor que 
 * R$ 1.500,00, o percentual de aumento deve ser dobrado automaticamente. Exiba o 
 * novo salário do funcionário.
 */
console.log("=============================================================");
console.log("|                  Folha de pagamento                       |");
console.log("=============================================================");
const prompt = require('prompt-sync')();

let salarioFuncionario = parseFloat(prompt('Informe o salário mensal do funcionário: '));
console.log("=============================================================");
let percentualAumento = parseInt(prompt('Informe o percentual de aumento: '));
console.log("=============================================================");

let aumento;

if (salarioFuncionario < 1500) {
    aumento = (salarioFuncionario * percentualAumento / 100) * 2;
} else {
    aumento = salarioFuncionario * percentualAumento / 100;
}

let novoSalarioFuncionario = (salarioFuncionario + aumento);
console.log(`Novo salário: R$ ${novoSalarioFuncionario.toFixed(2)}`);