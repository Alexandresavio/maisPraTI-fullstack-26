/**
 * O que é uma função?
 *
 * Uma função é um bloco de código:
 * - Nomeado
 * - Reutilizável
 * - Responsável por executar uma ação
 *
 * Ela pode:
 * - Receber parâmetros
 * - Executar um processo
 * - Retornar um resultado
 */

/**
 * FUNÇÃO SEM RETORNO
 *
 * Esta função apenas imprime o resultado no console.
 */

function imprimirSoma(a, b) {
    console.log(a + b)
}

// Soma normal
imprimirSoma(2, 3)

// b será undefined → resultado: NaN
imprimirSoma(2)

// Parâmetros extras são ignorados
imprimirSoma(2, 10, 4, 5, 6, 7, 8)

// a e b serão undefined → resultado: NaN
imprimirSoma()

/**
 * FUNÇÃO COM RETORNO
 *
 * A função retorna o resultado usando return.
 * O parâmetro b possui valor padrão igual a 1.
 */

function soma(a, b = 1) {
    return a + b
}

// Retorna 5
console.log(soma(2, 3))

// Como b não foi informado, assume valor 1
console.log(soma(2))

// a será undefined → resultado: NaN
console.log(soma())