/**
 * O que é um objeto?
 *
 * Um objeto em JavaScript é uma coleção de pares:
 * chave → valor
 *
 * Exemplo:
 * nome → "Notebook"
 * preco → 3500
 */

// Objetos podem ser criados usando chaves {}
const prod1 = {}

/**
 * Em JavaScript, é possível adicionar propriedades
 * dinamicamente, mesmo após a criação do objeto.
 */

// Adicionando propriedades ao objeto
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90

console.log(prod1)

/**
 * Também podemos criar objetos usando
 * a notação literal já com valores definidos.
 */

const produto2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(produto2)

/**
 * Objeto JavaScript ≠ JSON
 *
 * Objeto JavaScript:
 * - Faz parte do código JavaScript
 * - Pode possuir atributos e comportamentos (funções)
 * - Permite manipulação dinâmica
 *
 * JSON:
 * - É apenas um formato textual
 * - Muito usado na comunicação entre sistemas e APIs
 * - Usa aspas duplas nas chaves e valores string
 * - Não possui funções ou comportamentos
 *
 * Exemplo de JSON:
 *
 * {
 *   "nome": "Camisa Polo",
 *   "preco": 79.90
 * }
 */

/**
 * Objetos podem conter outros objetos.
 * Isso é chamado de estrutura aninhada.
 */

const produto = {
    categoria: {
        tipoDeCategoria: 'Eletrônicos',

        tipo: {
            nome: 'Smart TV'
        }
    }
}

console.log(produto)