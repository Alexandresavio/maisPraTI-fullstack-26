/**
 * 10. Um estacionamento cobra por faixas de tempo.
 *
 * 1ª hora = R$ 8,00
 * 2ª hora = R$ 6,00
 * 3ª hora = R$ 4,00
 * Acima de 3 horas = R$ 18,00 pelas primeiras 3 horas
 * mais R$ 2,00 por hora adicional.
 *
 * Exiba o tempo total e o valor cobrado.
 */

console.log("=============================================================");
console.log("|              Calculadora de Estacionamento               |");
console.log("=============================================================");

const prompt = require('prompt-sync')();

let horasEstacionadas = parseInt(
    prompt("Informe a quantidade de horas estacionadas: ")
);

let valorTotal;

switch (horasEstacionadas) {
    case 1:
        valorTotal = 8;
        break;

    case 2:
        valorTotal = 8 + 6;
        break;

    case 3:
        valorTotal = 8 + 6 + 4;
        break;

    default:
        if (horasEstacionadas > 3) {
            valorTotal = 18 + ((horasEstacionadas - 3) * 2);
        } else {
            console.log("Erro: quantidade de horas inválida.");
            process.exit();
        }
}

console.log(`Tempo estacionado: ${horasEstacionadas} hora(s)`);
console.log(`Valor a pagar: R$ ${valorTotal.toFixed(2)}`);