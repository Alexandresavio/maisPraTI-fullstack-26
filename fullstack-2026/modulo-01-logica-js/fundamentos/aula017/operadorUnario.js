/**
 * ============================================
 * EXEMPLO 1 — PRÉ-INCREMENTO (++x)
 * ============================================
 */

let x = 5;

/**
 * Neste momento:
 * 
 * x = 5
 */

console.log("Valor inicial de x:", x);

/**
 * Agora usamos:
 * ++x
 * 
 * Isso significa:
 * 
 * 1. Primeiro aumenta
 * 2. Depois usa o valor
 */

let y = ++x;

/**
 * O JavaScript faz isso internamente:
 * 
 * Passo 1:
 * x = x + 1
 * 
 * x passa a valer 6
 * 
 * Passo 2:
 * y recebe o novo valor de x
 * 
 * y = 6
 */

console.log("Valor final de x:", x);
console.log("Valor de y:", y);

/**
 * Resultado:
 * 
 * x = 6
 * y = 6
 */