/**
 * Crie um objeto representando um funcionário com nome, cargo, salário e anos de
 * experiência. Use for...in para listar todos os dados. Com base nos anos de
 * experiência, calcule e exiba o bônus anual: até 2 anos = 5% do salário, de 3 a 5
 * anos = 10%, acima de 5 anos = 15%.
 */

const prompt = require("prompt-sync")();

console.log("------------------------------");
console.log("    Cadastro Funcionário      ");
console.log("------------------------------");

const funcionario = {};

funcionario.nome = prompt("Nome: ");
funcionario.cargo = prompt("Cargo: ");
funcionario.salario = Number(prompt("Salário atual: "));
funcionario.anosExperiencia = Number.parseInt(
    prompt("Anos de experiência: ")
);

console.log("\n-------------------------------------");
console.log("Dados do Funcionário");
console.log("-------------------------------------");

for (let dadosFunci in funcionario) {
    console.log(`${dadosFunci}: ${funcionario[dadosFunci]}`);
}

let bonus = 0;

if (funcionario.anosExperiencia > 0 && funcionario.anosExperiencia <= 2) {
    bonus = funcionario.salario * 0.05;
} else if (funcionario.anosExperiencia >= 3 && funcionario.anosExperiencia <= 5) {
    bonus = funcionario.salario * 0.10;
} else if (funcionario.anosExperiencia > 5) {
    bonus = funcionario.salario * 0.15;
} else {
    console.log("\nAnos de experiência inválidos.");
}

console.log("-------------------------------------");
console.log(`Bônus anual: R$ ${bonus.toFixed(2)}`);