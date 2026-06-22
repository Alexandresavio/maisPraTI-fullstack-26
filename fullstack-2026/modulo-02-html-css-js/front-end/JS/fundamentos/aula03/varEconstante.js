/**
 * Conceito de variáveis: São espaços resrevados na memoria de um dispositivo para armazenar valores mutáveis,
 * estes valores podem ser alterados o tempo todo. 
 * 
 * forma de declarar uma variavel em JS
 * <var> <identificador> = <valor da variavel>
 */

var nome = "Sávio"; // declarção da variavel nome e atribuição de um valor.
var nome = "João"; // permitido
console.log(nome); // João
/**
 * Caracteristicas do VAR: 
 * Escopo de função e global(não respeita blocos {})
 * Pode ser re-declarada
 * Pode ser re-atribuída
 * Sofre hoisting (é "movida" para o topo)
 */
if (true) {
  var idade = 25;
}
console.log(idade); // 25 (mesmo fora do bloco vai retornar o valor da variavel!)

/** Recomendação usar let:
 *   mais moderno e seguro
 *   foi introduzido no ES6 (2015) para corrigir problemas do var.
 *   foma de declaração com let
 *   <let> <identificador> = <valor da variavel>
 */

let nome2 = "Sávio"; // declarei e atribui um valor
nome2 = "Paulo"; // reatribuição de valor
console.log(nome2); // Paulo
/**Carcateristicas do LET:
 * Escopo de bloco ({})
 * Pode ser re-atribuída
 * NÃO pode ser re-declarada no mesmo escopo
 */
//Erro ao redeclarar
let nome3 = "Sávio";
//let nome3 = "Maria"; // ERRO não permite redeclarar a variavel dentro do mesmo escopo
console.log(nome3);
/**
 * Escopo de bloco:
 * Aqui funciona como esperado — a variável fica só dentro do bloco.
 */
if (true) {
  let idade2 = 25;
}
//console.log(idade2); // ERRO

/** Constante em JS
 * const também veio no ES6 e é usado quando o valor não deve mudar
 * forma de declaração de constatnte JS
 * <const> <IDENTIFICADOR> = <valor da constante>
 */
const nome4 = "Alexandre";
console.log(nome4); // Alexandre
/**
 * Escopo de bloco
 * Não pode ser re-atribuída
 * Não pode ser re-declarada
 * Precisa ser inicializada na declaração
 */
//const nome4 = "Souza";
//console.log(nome4); // ERRO!