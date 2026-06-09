/**
 * 1. Escreva um programa que pergunte a nota de um aluno (de 0 a 10). Exiba se o
 * aluno foi Aprovado (nota maior ou igual a 7), em Recuperação (nota entre 5 e 6.9)
 * ou Reprovado (nota menor que 5).
 */
const prompt = require('prompt-sync')();
console.log("=============================================================");
console.log("|                  Avaliador de Notas                       |");
console.log("=============================================================");
let notaAluno = parseFloat(prompt("Informe a nota do aluno:"));
if((notaAluno < 0) || (notaAluno >10)){
    console.log("=============================================================");
    console.log("Esta nota não é válida. Informe uma nota entre 0 e 10");
    console.log("=============================================================");
}else if(notaAluno >= 7){
    console.log("=============================================================");
    console.log(`Nota aluno: ${notaAluno}`);
    console.log(`Status aluno: Aprovado`);
    console.log("=============================================================");
}else if((notaAluno >=5) && (notaAluno <= 6.9)){
    console.log("=============================================================");
    console.log(`Nota aluno: ${notaAluno}`);
    console.log(`Status aluno: Recuperação`);
    console.log("=============================================================");
}else{
    console.log("=============================================================");
    console.log(`Nota aluno: ${notaAluno}`);
    console.log(`Status aluno: Reprovado`);
    console.log("=============================================================");
}