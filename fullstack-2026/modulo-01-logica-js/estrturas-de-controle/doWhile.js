/**
 * Principais conceitos
 * O do...while é uma estrutura de repetição baseada em uma condição lógica,
 * assim como o while. 
 * A diferença está na posição da condição:
 * No while, a condição é verificada antes da execução do bloco.
 * No do...while, a condição é verificada depois da execução do bloco.
 * Por esse motivo, o bloco de código sempre será executado pelo menos uma vez.
 */

function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = -1;

do {
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log(opcao);
} while (opcao !== -1);

console.log("Programa encerrado.");

