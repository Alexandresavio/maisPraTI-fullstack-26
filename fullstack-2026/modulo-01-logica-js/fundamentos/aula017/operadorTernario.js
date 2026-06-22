/**
 * ============================================
 * OPERADOR TERNÁRIO
 * ============================================
 * 
 * O operador ternário é uma forma curta
 * de escrever um if/else.
 * 
 * Estrutura:
 * 
 * condição ? valorSeVerdadeiro : valorSeFalso
 */

/**
 * ============================================
 * EXEMPLO 1
 * ============================================
 */

let idade = 20;

/**
 * Explicação:
 * 
 * Criamos uma variável chamada idade
 * com valor 20.
 */

let resultado = idade >= 18 ? "Maior de idade" : "Menor de idade";

/**
 * Explicação linha a linha:
 * 
 * idade >= 18
 * 
 * O JavaScript faz a pergunta:
 * 
 * "idade é maior ou igual a 18?"
 * 
 * Como idade vale 20:
 * 
 * 20 >= 18
 * 
 * Resultado:
 * true
 * 
 * --------------------------------
 * 
 * O símbolo ?
 * significa:
 * 
 * "Se for verdadeiro..."
 * 
 * --------------------------------
 * 
 * "Maior de idade"
 * 
 * Esse valor será usado
 * caso a condição seja verdadeira.
 * 
 * --------------------------------
 * 
 * O símbolo :
 * significa:
 * 
 * "Senão..."
 * 
 * --------------------------------
 * 
 * "Menor de idade"
 * 
 * Esse valor será usado
 * caso a condição seja falsa.
 * 
 * --------------------------------
 * 
 * Como a condição foi verdadeira:
 * 
 * resultado recebe:
 * 
 * "Maior de idade"
 */

console.log(resultado);

/**
 * Saída:
 * 
 * Maior de idade
 */

/**
 * ============================================
 * EXEMPLO 2
 * ============================================
 */

let idade2 = 15;

/**
 * Explicação:
 * 
 * Criamos uma nova variável
 * com valor 15.
 */

let resultado2 = idade2 >= 18 ? "Maior de idade" : "Menor de idade";

/**
 * Explicação:
 * 
 * idade2 >= 18
 * 
 * O JavaScript verifica:
 * 
 * 15 >= 18
 * 
 * Resultado:
 * false
 * 
 * Como a condição foi falsa:
 * 
 * o JavaScript usa o valor
 * depois dos :
 * 
 * "Menor de idade"
 */

console.log(resultado2);

/**
 * Saída:
 * 
 * Menor de idade
 */

/**
 * ============================================
 * COMPARAÇÃO COM IF/ELSE
 * ============================================
 */

/**
 * Código usando operador ternário:
 */

let status = idade >= 18 ? "Maior de idade" : "Menor de idade";

/**
 * Mesmo código usando if/else:
 */

let status2;

if (idade >= 18) {
    status2 = "Maior de idade";
} else {
    status2 = "Menor de idade";
}

/**
 * ============================================
 * RESUMO
 * ============================================
 * 
 * condição
 *     ? se verdadeiro
 *     : se falso
 * 
 * --------------------------------
 * 
 * O operador ternário:
 * 
 * ✔ Deixa o código menor
 * ✔ Substitui if/else simples
 * ✔ Facilita leituras rápidas
 * ✔ É muito usado em JavaScript moderno
 */