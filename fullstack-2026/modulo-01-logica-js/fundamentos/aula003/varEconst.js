/**
 * CONCEITO DE VARIÁVEIS
 *
 * Variáveis são espaços reservados na memória
 * para armazenar valores que podem ser alterados.
 *
 * Estrutura:
 * <palavra reservada> <identificador> = <valor>
 */

/**
 * DECLARAÇÃO COM VAR
 *
 * Estrutura:
 * var nomeDaVariavel = valor
 */

var nome = "Sávio" // Declaração da variável + atribuição de valor

// O var permite redeclaração
var nome = "João"

console.log(nome) // João

/**
 * CARACTERÍSTICAS DO VAR
 *
 * - Escopo global ou de função
 * - NÃO respeita escopo de bloco {}
 * - Permite redeclaração
 * - Permite reatribuição
 * - Sofre hoisting
 */

if (true) {

  // A variável continua acessível fora do bloco
  var idade = 25

}

// Mesmo fora do bloco, o valor continua acessível
console.log(idade) // 25



/**
 * LET
 *
 * Mais moderno e seguro.
 *
 * Foi introduzido no ES6 (2015)
 * para corrigir problemas do var.
 *
 * Estrutura:
 * let nomeDaVariavel = valor
 */

let nome2 = "Sávio"

// Reatribuição permitida
nome2 = "Paulo"

console.log(nome2) // Paulo

/**
 * CARACTERÍSTICAS DO LET
 *
 * - Escopo de bloco {}
 * - Permite reatribuição
 * - NÃO permite redeclaração no mesmo escopo
 */

// Declaração válida
let nome3 = "Sávio"

// ERRO:
// Não é permitido redeclarar no mesmo escopo
// let nome3 = "Maria"

console.log(nome3)

/**
 * ESCOPO DE BLOCO
 *
 * A variável existe apenas dentro do bloco.
 */

if (true) {

  let idade2 = 25

}

// ERRO:
// idade2 não existe fora do bloco
// console.log(idade2)

/**
 * CONST
 *
 * Também foi introduzido no ES6.
 *
 * Usado para valores que não devem ser reatribuídos.
 *
 * Estrutura:
 * const NOME = valor
 */

const nome4 = "Alexandre"

console.log(nome4) // Alexandre

/**
 * CARACTERÍSTICAS DO CONST
 *
 * - Escopo de bloco {}
 * - NÃO permite reatribuição
 * - NÃO permite redeclaração
 * - Deve ser inicializada na declaração
 */

// ERRO:
// Não é permitido redeclarar
// const nome4 = "Souza"

// ERRO:
// Não é permitido reatribuir
// nome4 = "Carlos"