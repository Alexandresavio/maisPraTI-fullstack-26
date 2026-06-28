/**
 * Crie um array de objetos com nome e nota de 6 alunos. Use for...of para classificar 
cada  aluno  (Aprovado,  Recuperação  ou  Reprovado)  e  exibir  o  resultado.  Use 
forEach para calcular e exibir separadamente a média dos aprovados e a média 
dos reprovados.
 */

const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Pedro", nota: 6 },
    { nome: "Lucas", nota: 4 },
    { nome: "Maria", nota: 9 },
    { nome: "João", nota: 3 },
    { nome: "Carla", nota: 7 }
];

let somaAprovados = 0;
let qtdAprovados = 0;

let somaReprovados = 0;
let qtdReprovados = 0;

for (const aluno of alunos) {

    if (aluno.nota >= 7) {
        console.log(`${aluno.nome} - Aprovado`);
    } else if (aluno.nota >= 5) {
        console.log(`${aluno.nome} - Recuperação`);
    } else {
        console.log(`${aluno.nome} - Reprovado`);
    }
}

alunos.forEach(aluno => {

    if (aluno.nota >= 7) {
        somaAprovados += aluno.nota;
        qtdAprovados++;
    }

    if (aluno.nota < 5) {
        somaReprovados += aluno.nota;
        qtdReprovados++;
    }

});

console.log("Média aprovados:", (somaAprovados / qtdAprovados).toFixed(2));
console.log("Média reprovados:", (somaReprovados / qtdReprovados).toFixed(2));