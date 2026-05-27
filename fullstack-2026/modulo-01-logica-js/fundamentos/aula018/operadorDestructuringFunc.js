/**
 * ============================================
 * DESTRUCTURING EM PARÂMETROS DE FUNÇÃO
 * ============================================
 * 
 * O operador destructuring permite extrair
 * propriedades de um objeto diretamente
 * nos parâmetros da função.
 * 
 * Também podemos definir valores padrão.
 */

/**
 * ============================================
 * FUNÇÃO RAND
 * ============================================
 */

function rand({ min = 0, max = 1000 } = {}) {

    /**
     * Explicação:
     * 
     * { min = 0, max = 1000 }
     * -> destructuring do objeto recebido
     * 
     * min = 0
     * -> se min não existir, usa 0
     * 
     * max = 1000
     * -> se max não existir, usa 1000
     * 
     * = {}
     * -> se nenhum parâmetro for enviado,
     *    usa um objeto vazio
     */

    const valor = Math.random() * (max - min) + min;

    /**
     * Explicação:
     * 
     * Math.random()
     * -> gera número aleatório entre 0 e 1
     * 
     * (max - min)
     * -> calcula o intervalo
     * 
     * multiplicação
     * -> ajusta o valor para o intervalo desejado
     * 
     * + min
     * -> adiciona o valor mínimo
     */

    return Math.floor(valor);

    /**
     * Math.floor()
     * -> arredonda para baixo
     * 
     * Exemplo:
     * 45.9 -> 45
     */
}

/**
 * ============================================
 * OBJETO
 * ============================================
 */

const obj = { max: 50, min: 40 };

/**
 * Explicação:
 * 
 * Criamos um objeto com:
 * 
 * min = 40
 * max = 50
 */

/**
 * ============================================
 * PRIMEIRA CHAMADA
 * ============================================
 */

console.log(rand(obj));

/**
 * Explicação:
 * 
 * Passa o objeto:
 * 
 * {
 *   max: 50,
 *   min: 40
 * }
 * 
 * Resultado:
 * número aleatório entre 40 e 50
 */

/**
 * ============================================
 * SEGUNDA CHAMADA
 * ============================================
 */

console.log(rand({ min: 955 }));

/**
 * Explicação:
 * 
 * Apenas min foi informado.
 * 
 * max usa o valor padrão:
 * 1000
 * 
 * Resultado:
 * número aleatório entre 955 e 1000
 */

/**
 * ============================================
 * TERCEIRA CHAMADA
 * ============================================
 */

console.log(rand({}));

/**
 * Explicação:
 * 
 * Foi passado um objeto vazio.
 * 
 * Então:
 * 
 * min = 0
 * max = 1000
 * 
 * Resultado:
 * número aleatório entre 0 e 1000
 */

/**
 * ============================================
 * QUARTA CHAMADA
 * ============================================
 */

console.log(rand({}));

/**
 * Mesmo comportamento do exemplo anterior.
 */

/**
 * ============================================
 * QUINTA CHAMADA
 * ============================================
 */

console.log(rand());

/**
 * Explicação:
 * 
 * Nenhum parâmetro foi enviado.
 * 
 * Como usamos:
 * 
 * = {}
 * 
 * a função usa um objeto vazio por padrão.
 * 
 * Isso evita o erro:
 * 
 * TypeError:
 * Cannot destructure property...
 */

/**
 * ============================================
 * RESUMO
 * ============================================
 * 
 * Este código demonstra:
 * 
 * ✔ Destructuring em funções
 * ✔ Valores padrão
 * ✔ Objetos como parâmetros
 * ✔ Math.random()
 * ✔ Math.floor()
 * ✔ Como evitar erros com parâmetros undefined
 * ✔ Código mais limpo e moderno
 */