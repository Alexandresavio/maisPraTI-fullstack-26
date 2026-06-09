/**
 * 9. Crie um programa que leia o número do mês (1 a 12) e,
 * usando switch case, exiba o nome do mês correspondente
 * e quantos dias ele possui.
 *
 * Para fevereiro, pergunte ao usuário se o ano é bissexto
 * e ajuste a quantidade de dias para 29 caso seja.
 */

console.log("=============================================================");
console.log("|                  Consulta de Meses                        |");
console.log("=============================================================");

const prompt = require('prompt-sync')();

let numeroMes = parseInt(prompt("Informe o número do mês (1 a 12): "));

let nomeMes;
let quantidadeDias;

switch (numeroMes) {
    case 1:
        nomeMes = "Janeiro";
        quantidadeDias = 31;
        break;

    case 2:
        nomeMes = "Fevereiro";

        let anoBissexto = prompt("O ano é bissexto? (S/N): ").toUpperCase();

        if (anoBissexto === "S") {
            quantidadeDias = 29;
        } else {
            quantidadeDias = 28;
        }
        break;

    case 3:
        nomeMes = "Março";
        quantidadeDias = 31;
        break;

    case 4:
        nomeMes = "Abril";
        quantidadeDias = 30;
        break;

    case 5:
        nomeMes = "Maio";
        quantidadeDias = 31;
        break;

    case 6:
        nomeMes = "Junho";
        quantidadeDias = 30;
        break;

    case 7:
        nomeMes = "Julho";
        quantidadeDias = 31;
        break;

    case 8:
        nomeMes = "Agosto";
        quantidadeDias = 31;
        break;

    case 9:
        nomeMes = "Setembro";
        quantidadeDias = 30;
        break;

    case 10:
        nomeMes = "Outubro";
        quantidadeDias = 31;
        break;

    case 11:
        nomeMes = "Novembro";
        quantidadeDias = 30;
        break;

    case 12:
        nomeMes = "Dezembro";
        quantidadeDias = 31;
        break;

    default:
        console.log("Erro: mês inválido.");
        process.exit();
}

console.log(`Mês: ${nomeMes}`);
console.log(`Quantidade de dias: ${quantidadeDias}`);