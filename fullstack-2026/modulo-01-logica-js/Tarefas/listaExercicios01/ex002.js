/**
 * 2. Crie um programa que pergunte o ano de nascimento de uma pessoa e calcule
 * sua idade. Com base na idade, exiba se ela é criança (até 12 anos), adolescente
 * (de 13 a 17 anos), adulta (de 18 a 59 anos) ou idosa (60 anos ou mais).
 */
console.log("=============================================================");
console.log("|                  Calculadora de idade                     |");
console.log("=============================================================");
const prompt = require('prompt-sync')();
let anoAtual = parseInt(prompt("Em que ano estamos:"));
console.log("=============================================================");
let anoNascUsuario = parseInt(prompt("Informe seu ano de nascimento:"));
console.log("=============================================================");
let idade = (anoAtual - anoNascUsuario);
if((idade >= 0) &&(idade <= 12)){
    console.log(`A idade de ${idade} anos está calssificado como criança.`)
} else if (idade <= 17){
    console.log(`A idade de ${idade} anos está calssificado como adolescente.`)
}else if(idade <= 59){
    console.log(`A idade de ${idade} anos está calssificado como adulto.`)
}else{
    console.log(`A idade de ${idade} anos está calssificado como idoso.`)
}