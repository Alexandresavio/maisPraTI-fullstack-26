/**
 * for...in, uma variação do for utilizada para percorrer 
 * propriedades de objetos e índices de arrays de forma mais simples,
 * sem a necessidade de controlar manualmente uma variável de contador.
 */

/**
 * Principais conceitos:
 * O for...in percorre as chaves (propriedades) de uma estrutura.
 * Em arrays, ele retorna os índices dos elementos, e não os valores diretamente.
 * Em objetos, ele retorna os nomes dos atributos (propriedades).
 */
console.log("Utilizando for...in com Arrays:");
const notas = [6.7, 7.4, 9.8, 8.1, 7.7];
for(let i in notas){
    console.log(i, notas[i]);
}