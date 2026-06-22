/**
 * Crie uma matriz 3×4 (3 alunos, 4 notas cada). Leia os valores via laços aninhados.
 * Calcule e exiba a média de cada aluno, a média geral da turma e qual aluno teve 
 * o melhor desempenho. 
 */

console.log("----------------------------------------------------------");
console.log("                BOLETIM DA TURMA                          ");
console.log("----------------------------------------------------------");

const prompt = require("prompt-sync")();

let notas = [];
let mediaGeral = 0;
let melhorAluno = 0;
let maiorMedia = 0;

for (let aluno = 0; aluno < 3; aluno++) {

    notas[aluno] = [];

    let somaAluno = 0;

    console.log(`\nAluno ${aluno + 1}`);

    for (let nota = 0; nota < 4; nota++) {

        let valor = Number(
            prompt(`Digite a nota ${nota + 1}: `)
        );

        notas[aluno][nota] = valor;

        somaAluno += valor;
    }

    let mediaAluno = somaAluno / 4;

    console.log(
        `Média do aluno ${aluno + 1}: ${mediaAluno.toFixed(2)}`
    );

    mediaGeral += mediaAluno;

    if (mediaAluno > maiorMedia) {
        maiorMedia = mediaAluno;
        melhorAluno = aluno + 1;
    }
}

mediaGeral = mediaGeral / 3;

console.log("\n----------------------------------------------------------");
console.log(`Média geral da turma: ${mediaGeral.toFixed(2)}`);
console.log(`Melhor desempenho: Aluno ${melhorAluno}`);