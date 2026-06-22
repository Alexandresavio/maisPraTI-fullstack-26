/**
 * operador Destructuring (desestruturação) foi introduzido no ES2015 (ES6)
 * e serve para extrair valores de objetos e arrays de forma mais simples e organizada.
 * 
 * Destructuring em Objetos:
 * Quando utilizado com objetos, o operador usa chaves {} para acessar propriedades 
 * internas do objeto e atribuí-las diretamente a variáveis.
 * Exemplo:
 */

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 100
    }
}

/**
 * declaração básica do operador destructuring:
 * 
 * const {} = nomeDoObjeto
 */

/**
 * ============================================
 * EXTRAINDO PROPRIEDADES DO OBJETO
 * ============================================
 */

const { nome, idade } = pessoa;

/**
 * Explicação:
 * 
 * As chaves {} representam o operador destructuring.
 * 
 * Estamos dizendo:
 * "Pegue do objeto pessoa as propriedades nome e idade".
 * 
 * Internamente o JavaScript faz algo parecido com:
 * 
 * const nome = pessoa.nome;
 * const idade = pessoa.idade;
 */

console.log(nome, idade); // Ana 5

/**
 * ============================================
 * RENOMEANDO VARIÁVEIS
 * ============================================
 */

const { nome: n, idade: i } = pessoa;

/**
 * Explicação:
 * 
 * nome: n
 * -> pega a propriedade nome e salva na variável n
 * 
 * idade: i
 * -> pega a propriedade idade e salva na variável i
 */

console.log(n, i); // Ana 5

/**
 * ============================================
 * VALORES PADRÃO
 * ============================================
 */

const { sobrenome, bemHumorada = true } = pessoa;

/**
 * Explicação:
 * 
 * sobrenome:
 * -> essa propriedade não existe no objeto
 * -> resultado será undefined
 * 
 * bemHumorada = true
 * -> se a propriedade não existir,
 *    o valor padrão será true
 */

console.log(sobrenome, bemHumorada); // undefined true

/**
 * ============================================
 * DESTRUCTURING ANINHADO
 * ============================================
 */

const { endereco: { logradouro, numero, cep } } = pessoa;

/**
 * Explicação:
 * 
 * endereco: {}
 * -> entra dentro do objeto endereco
 * 
 * logradouro
 * -> pessoa.endereco.logradouro
 * 
 * numero
 * -> pessoa.endereco.numero
 * 
 * cep
 * -> pessoa.endereco.cep
 * 
 * Como cep não existe:
 * -> undefined
 */

console.log(logradouro, numero, cep); // Rua ABC 100 undefined

/**
 * ============================================
 * EXEMPLO QUE GERA ERRO
 * ============================================
 */

// const { conta: { ag, num } } = pessoa;

/**
 * Explicação:
 * 
 * O objeto pessoa NÃO possui a propriedade conta.
 * 
 * Então o JavaScript tenta fazer:
 * 
 * pessoa.conta.ag
 * 
 * Mas pessoa.conta é undefined.
 * 
 * Isso gera erro:
 * 
 * TypeError: Cannot read properties of undefined
 */

/**
 * ============================================
 * FORMA SEGURA DE EVITAR O ERRO
 * ============================================
 */

const { conta: { ag, num } = {} } = pessoa;

/**
 * Explicação:
 * 
 * = {}
 * -> caso conta não exista,
 *    será usado um objeto vazio.
 * 
 * Assim evitamos o erro.
 */

console.log(ag, num); // undefined undefined