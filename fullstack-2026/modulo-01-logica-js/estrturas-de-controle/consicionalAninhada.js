/**
 * Adiciona o método "entre" ao protótipo de Number.
 * Com isso, qualquer valor numérico pode utilizar o método entre().
 */
Number.prototype.entre = function(inicio, fim){

    /*
     * "this" representa o número que chamou o método.
     * Exemplo:
     * 8.5.entre(7, 10)
     *
     * Nesse caso, this vale 8.5.
     *
     * Retorna true se o número estiver dentro do intervalo
     * informado, incluindo os limites.
     */
    return this >= inicio && this <= fim;
}


/**
 * Recebe uma nota e exibe a situação do aluno.
 */
const imprimirResultado = function(nota){

    /*
     * Verifica se a nota está entre 9 e 10.
     */
    if(nota.entre(9, 10)){

        console.log("Quadro de honra");

    /*
     * Verifica se a nota está entre 7 e 8.99.
     */
    }else if(nota.entre(7, 8.99)){

        console.log("Aprovado");

    /*
     * Verifica se a nota está entre 4 e 6.99.
     */
    }else if(nota.entre(4, 6.99)){

        console.log("Recuperação");

    /*
     * Verifica se a nota está entre 0 e 3.99.
     */
    }else if(nota.entre(0, 3.99)){

        console.log("Reprovado");

    /*
     * Executa quando nenhuma condição anterior é atendida.
     */
    }else{

        console.log("Nota inválida");
    }
}


/**
 * Testes da função.
 */
imprimirResultado(10);     // Quadro de honra
imprimirResultado(8.9);    // Aprovado
imprimirResultado(6.55);   // Recuperação
imprimirResultado(2.3);    // Reprovado
imprimirResultado(-1);     // Nota inválida
imprimirResultado(11);     // Nota inválida