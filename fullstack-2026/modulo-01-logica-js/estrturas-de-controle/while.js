/**
 * laço de repetição while, uma estrutura indicada para situações em que não sabemos previamente 
 * quantas vezes uma repetição será executada. O laço continua executando enquanto uma condição 
 * for verdadeira e para quando essa condição se tornar falsa.
 */
function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

/**
 * Cuidados com o while:
 * É necessário garantir que algo dentro do laço altere a condição de parada.
 * Caso contrário, a condição pode nunca se tornar falsa, gerando um laço infinito,
 * situação em que o programa fica preso na repetição.
 */
let opcao = 0;

while (opcao !== -1) {
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log(`Opção escolhida foi ${opcao}`);
}

console.log("Programa encerrado.");