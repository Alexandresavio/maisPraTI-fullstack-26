/**
 * O que é uma função?
 * Uma função é: um bloco de código, nomeado, reutilizável,que executa uma ação.
 * Ela pode: receber parâmetros, executar um processo, retornar um resultado.
 */

//função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}
imprimirSoma(2, 3);
imprimirSoma(2); //NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8 );
imprimirSoma();//NaN

//Função com retonro
function soma(a, b = 1){
    return (a + b);
}
console.log(soma(2, 3));
console.log(soma(2));
console.log(soma());