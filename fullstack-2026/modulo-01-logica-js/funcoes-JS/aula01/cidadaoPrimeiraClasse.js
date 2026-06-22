/**
 * O que é uma função?
 * Uma função é um bloco de código reutilizável que pode:
 * Receber parâmetros;
 * Executar uma determinada lógica;
 * Retornar um valor.
 */

/**
 * Declarando funções:
 * A forma mais tradicional é a declaração literal:
 */
function soma(a, b){
    return a + b;
}
/**
 * Os parâmetros são opcionais;
 * O retorno é opcional;
 * Se nenhum valor for retornado, a função retorna undefined;
 * Diferentemente de algumas estruturas de controle, o bloco {} * é obrigatório em funções tradicionais.
 */

/**
 * Armazenando funções em variáveis
 * Funções podem ser atribuídas a constantes ou variáveis:
 */
/**
 * Nesse exemplo:
 * A função é anônima (não possui nome);
 * A variável passa a referenciar a função;
 * Para executá-la, é necessário utilizar parênteses:
 */
const funcao = function(){
    console.log("Olá!");
}

funcao();

