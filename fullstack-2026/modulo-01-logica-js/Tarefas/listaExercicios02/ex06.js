/**
 * Crie um array e leia via laço o nome e a nota de 5 alunos. Ao final, exiba: a média 
 * da turma, o nome do aluno com maior nota e o nome do aluno com menor nota. 
 * Não use funções prontas como Math.max()
 */

console.log("----------------------------------------------------------");
console.log("                CADASTRO DE ALUNOS                        ");
console.log("----------------------------------------------------------");

const prompt = require("prompt-sync")();

let alunos = [];
let somaNotas = 0;

for (let i = 0; i < 5; i++) {

    let nome = prompt(`Nome do aluno ${i + 1}: `);
    let nota = Number(prompt(`Nota do aluno ${i + 1}: `));

    alunos.push({
        nome,
        nota
    });

    somaNotas += nota;
}

let maiorNota = alunos[0];
let menorNota = alunos[0];

for (let i = 1; i < alunos.length; i++) {

    if (alunos[i].nota > maiorNota.nota) {
        maiorNota = alunos[i];
    }

    if (alunos[i].nota < menorNota.nota) {
        menorNota = alunos[i];
    }
}

console.log(`Média da turma: ${(somaNotas / 5).toFixed(2)}`);
console.log(`Maior nota: ${maiorNota.nome}`);
console.log(`Menor nota: ${menorNota.nome}`);