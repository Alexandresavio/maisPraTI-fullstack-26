/**
 * A aula explica como utilizar o operador Destructuring em arrays no JavaScript,
 * recurso introduzido no ES2015 (ES6), que permite extrair valores de arrays de
 * forma rápida e organizada.
 */

/**
 * Sintaxe com colchetes []
 * 
 * Enquanto o destructuring de objetos utiliza {},
 * no array são usados colchetes [],
 * porque arrays são definidos com essa sintaxe.
 */

/**
 * ============================================
 * EXEMPLO BÁSICO
 * ============================================
 */

const [a] = [10];

/**
 * Explicação:
 * 
 * Os colchetes [] representam o operador destructuring.
 * 
 * Estamos dizendo:
 * 
 * "Pegue o primeiro elemento do array
 * e coloque na variável a".
 * 
 * Internamente o JavaScript faz algo parecido com:
 * 
 * const a = 10;
 */

console.log(a); // 10

/**
 * ============================================
 * EXTRAINDO MÚLTIPLOS VALORES
 * ============================================
 */

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];

/**
 * Explicação:
 * 
 * Array original:
 * [10, 7, 9, 8]
 * 
 * n1:
 * -> recebe o primeiro valor (10)
 * 
 * primeira vírgula vazia:
 * -> ignora o segundo valor (7)
 * 
 * n3:
 * -> recebe o terceiro valor (9)
 * 
 * segunda vírgula vazia:
 * -> ignora o quarto valor (8)
 * 
 * n5:
 * -> tenta pegar o quinto elemento
 * -> como não existe, recebe undefined
 * 
 * n6 = 0:
 * -> tenta pegar o sexto elemento
 * -> como não existe, usa o valor padrão 0
 */

console.log(n1, n3, n5, n6); // 10 9 undefined 0

/**
 * ============================================
 * DESTRUCTURING ANINHADO
 * ============================================
 */

const [, [, nota]] = [[1, 8], [9, 6]];

/**
 * Explicação:
 * 
 * Estrutura do array:
 * 
 * [
 *   [1, 8],
 *   [9, 6]
 * ]
 * 
 * primeira vírgula:
 * -> ignora o primeiro array [1, 8]
 * 
 * depois entra no segundo array:
 * [9, 6]
 * 
 * vírgula vazia:
 * -> ignora o valor 9
 * 
 * nota:
 * -> recebe o valor 6
 */

console.log(nota); // 6

/**
 * ============================================
 * RESUMO
 * ============================================
 * 
 * O destructuring em arrays permite:
 * 
 * ✔ Extrair valores rapidamente
 * ✔ Ignorar posições
 * ✔ Usar valores padrão
 * ✔ Trabalhar com arrays aninhados
 * ✔ Escrever código mais limpo e organizado
 */