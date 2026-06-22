/**
 * FUNÇÕES EM VARIÁVEIS
 *
 * Em JavaScript, funções podem ser armazenadas
 * dentro de variáveis.
 *
 * Isso torna a linguagem muito flexível.
 */

/**
 * A variável imprimirSoma recebe uma função anônima.
 *
 * Função anônima:
 * - É uma função sem nome
 * - Pode ser armazenada em variáveis
 * - Também pode ser passada como parâmetro
 */

const imprimirSoma = function(a, b) {

    // Soma os valores recebidos e imprime no console
    console.log(a + b)

}

/**
 * Chamando a função armazenada na variável.
 *
 * a = 2
 * b = 3
 */

imprimirSoma(2, 3)

/**
 * ARROW FUNCTION
 *
 * Arrow Functions foram introduzidas no ES6 (2015).
 *
 * Elas possuem uma sintaxe mais curta e moderna.
 */

const soma = (a, b) => {

    // Retorna a soma dos parâmetros
    return a + b

}

// Exibe o valor retornado pela função
console.log(soma(5, 4))

/**
 * RETORNO IMPLÍCITO
 *
 * Quando a Arrow Function possui apenas
 * uma única expressão, o return pode ser omitido.
 */

const subtracao = (a, b) => a - b

// Resultado: -1
console.log(subtracao(2, 3))