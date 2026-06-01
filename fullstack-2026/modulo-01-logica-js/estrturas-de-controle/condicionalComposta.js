// Armazenando uma função dentro de uma variável.
// Isso é chamado de Function Expression (Expressão de Função).
const imprimeirResultado = function(nota){

    // Estrutura condicional.
    // Verifica se a nota é maior ou igual a 7.
    if (nota >= 7){

        // Executa quando a condição é verdadeira.
        console.log("Aprovado.");
    }else{

        // Executa quando a condição é falsa.
        console.log("Reprovado.");
    }
}


// Chamada da função passando o valor 7.5
// Como 7.5 >= 7 é true, será exibido "Aprovado."
imprimeirResultado(7.5);

// Chamada da função passando o valor 5.4.
// Como 5.4 >= 7 é false, será exibido "Reprovado."
imprimeirResultado(5.4);

// Chamada da função passando uma string.
// JavaScript tentará converter os valores para realizar a comparação.
imprimeirResultado("Epa!");