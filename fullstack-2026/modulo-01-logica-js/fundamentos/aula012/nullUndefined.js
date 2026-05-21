/**
 * ATRIBUIÇÃO POR REFERÊNCIA
 *
 * Quando trabalhamos com objetos, JavaScript faz
 * atribuição por referência.
 *
 * Isso significa que as variáveis armazenam
 * uma referência para o mesmo objeto na memória.
 */

const a = { nome: 'Teste' }

// b recebe a mesma referência de a
const b = a

console.log(a)

/**
 * Como a e b apontam para o mesmo objeto,
 * alterar um deles também altera o outro.
 */

b.nome = 'Opa'

console.log(b)

// O objeto acessado por a também foi alterado
console.log(a)

/**
 * ATRIBUIÇÃO POR VALOR
 *
 * Com tipos primitivos (number, string, boolean),
 * ocorre uma cópia do valor.
 */

let c = 3

// d recebe uma cópia do valor de c
let d = c

// Incrementa o valor de d em +1
d++

/**
 * Resultado:
 * c continua com valor 3
 * d passa a valer 4
 *
 * Cada variável possui seu valor independente.
 */

console.log(c)
console.log(d)

/**
 * undefined
 *
 * Significa que a variável foi declarada,
 * mas ainda não recebeu valor.
 */

let valor

console.log(valor) // undefined

/**
 * null
 *
 * Representa ausência intencional de valor.
 * Geralmente usado para "zerar" referências.
 */

valor = null

console.log(valor) // null

// Erro: não é possível acessar métodos de null
// console.log(valor.toString())

/**
 * Objetos podem existir mesmo sem determinadas propriedades.
 */

const produto = {}

console.log(produto.preco)
// undefined → a propriedade não existe

/**
 * Adicionando uma propriedade dinamicamente.
 */

produto.preco = 3.50

console.log(produto)

/**
 * Evite atribuir undefined manualmente.
 * O ideal é usar null quando quiser limpar um valor.
 */

produto.preco = undefined

console.log(produto)