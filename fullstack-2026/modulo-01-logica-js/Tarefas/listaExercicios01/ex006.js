/**
 * 6. Crie um programa de caixa eletrônico simplificado.
 * O usuário informa o valor que deseja sacar (múltiplo de 10).
 * O programa deve calcular e exibir a menor quantidade possível
 * de cédulas de R$ 100, R$ 50, R$ 20 e R$ 10 necessárias para compor o saque.
 */

console.log("=============================================================");
console.log("|                   Caixa Eletrônico                        |");
console.log("=============================================================");

const prompt = require('prompt-sync')();

let valorSaque = parseInt(prompt("Informe o valor do saque: "));

let quantidadeNotas100 = parseInt(valorSaque / 100);
valorSaque = valorSaque % 100;

let quantidadeNotas50 = parseInt(valorSaque / 50);
valorSaque = valorSaque % 50;

let quantidadeNotas20 = parseInt(valorSaque / 20);
valorSaque = valorSaque % 20;

let quantidadeNotas10 = parseInt(valorSaque / 10);

console.log("Quantidade de cédulas necessárias:");
console.log(`Notas de R$ 100: ${quantidadeNotas100}`);
console.log(`Notas de R$ 50: ${quantidadeNotas50}`);
console.log(`Notas de R$ 20: ${quantidadeNotas20}`);
console.log(`Notas de R$ 10: ${quantidadeNotas10}`);