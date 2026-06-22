/**
 * Conceito de chave/valor
 *  JavaScript trabalha constantemente com a ideia de:
 * chave → valor ou nome → valor
 * 
 * Esse conceito aparece:
 * em variáveis, constantes, objetos,funções,
 * e em várias estruturas da linguagem
 */

//Variáveis também seguem o conceito chave/valor
const saudacao = 'opa!';
/**
 * Nesse caso:
 * saudacao → chave/nome
 * 'Opa' → valor.
 */
console.log(saudacao);

/**
 * O que é contexto léxico?
 * Contexto léxico é: o local físico do código onde uma variável foi declarada.
 * Ou seja: cada função, bloco, ou objeto, cria um novo contexto/escopo.
 */
function exec() {
    const saudacao = 'Fala Beleza'
    return saudacao
}
/**
 * Aqui: a variável saudacao existe apenas dentro da função,
 * ela pertence ao contexto léxico da função.
 * variáveis podem possuir o mesmo nome, desde que estejam em contextos diferentes
 */
console.log(exec(saudacao));

/**
 * Objetos como pares chave/valor:
 * objetos são coleções de pares chave/valor.
 */
const cliente = {
    nome: 'Pedro',
    idade: 32
}
console.log(cliente);

//Objetos podem conter outros objetos
//Isso é chamado de: estrutura aninhada de objetos
const cliente2  = {
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}