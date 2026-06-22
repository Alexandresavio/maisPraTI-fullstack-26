/**
 * O for...in é uma estrutura de repetição que percorre
 * as propriedades de um objeto ou os índices de um array.
 *
 * Ele é especialmente útil para navegar por objetos
 * de forma simples e dinâmica.
 */

console.log("Utilizando for...in com Arrays:");

const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

/**
 * i recebe o índice de cada elemento do array.
 * Para acessar o valor correspondente, utilizamos notas[i].
 */
for (let i in notas) {
    console.log(i, notas[i]);
}

/**
 * Saída:
 * 0 6.7
 * 1 7.4
 * 2 9.8
 * 3 8.1
 * 4 7.7
 */

console.log("-------------------------------------------------------------------");
console.log("Utilizando for...in com Objetos");

/**
 * atributo recebe o nome de cada propriedade do objeto.
 *
 * pessoa[atributo] acessa dinamicamente o valor
 * associado à propriedade atual.
 *
 * O laço percorre todas as propriedades do objeto:
 * nome, sobrenome, idade e peso.
 */
const pessoa = {
    nome: "João",
    sobrenome: "Silva",
    idade: 29,
    peso: 64
};

for (let atributo in pessoa) {
    console.log(`${atributo}: ${pessoa[atributo]}`);
}

/**
 * Saída:
 * nome: João
 * sobrenome: Silva
 * idade: 29
 * peso: 64
 */