/**
 * A estrutura de repetição for é a mais indicada quando se conhece
 * previamente a quantidade de vezes que um bloco de código deve ser executado.
 *
 * Embora seja possível resolver esses casos com while, o for organiza melhor
 * os elementos necessários para controlar a repetição.
 */

console.log("Exemplo: utilizando while para contar de 1 a 10");

/* Inicializa a variável que controlará o número de repetições. */
let contador = 1;

/* Enquanto o contador for menor ou igual a 10, o laço continuará executando. */
while (contador <= 10) {

    /* Exibe o valor atual do contador. */
    console.log(`contador = ${contador}`);

    /* Adiciona 1 ao contador a cada repetição. */
    contador++;
}

/**
 * O for reúne inicialização, condição e incremento
 * em uma única estrutura, deixando o código mais organizado.
 */
console.log("_____________________________________________________________________________________");
console.log("Mesmo exemplo utilizando FOR:");

for (let contador = 1; contador <= 10; contador++) {

    /* Exibe o valor atual do contador. */
    console.log(`contador = ${contador}`);
}

console.log("_____________________________________________________________________________________");
console.log("Percorrendo Arrays");

/**
 * Um dos usos mais comuns do for em JavaScript
 * é percorrer todos os elementos de um array.
 */
const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

/*
 * i representa a posição atual do array.
 * O laço começa na posição 0 e percorre todas
 * as posições até o final do array.
 */
for (let i = 0; i < notas.length; i++) {

    /* Exibe a nota armazenada na posição atual. */
    console.log(`nota = ${notas[i]}`);
}