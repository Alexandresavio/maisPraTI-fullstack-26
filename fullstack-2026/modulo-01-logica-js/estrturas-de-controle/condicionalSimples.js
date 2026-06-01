// Declaração de uma função.
// A função recebe um parâmetro chamado "nota".
function soBoaNoticia(nota){

    // Estrutura condicional.
    // O código dentro do bloco só será executado
    // se a expressão retornar true.
    if(nota >= 7){

        // Template String.
        // Permite inserir variáveis dentro de textos usando ${}.
        console.log(`Aprovado com nota ${nota}`);
    }
}

// Chamada da função passando o valor 8.1.
// Como 8.1 >= 7, a mensagem será exibida.
soBoaNoticia(8.1);

// Chamada da função passando o valor 6.1.
// Como 6.1 >= 7 é false, nada será exibido.
soBoaNoticia(6.1);


// Declaração de outra função.
// Recebe um parâmetro chamado "valor".
function seForVerdadeEuFalo(valor){

    // JavaScript converte automaticamente o valor
    // para verdadeiro (truthy) ou falso (falsy).
    if(valor){

        console.log(`É verdade... ${valor}`);
    }
}

// String não vazia é considerada truthy.
seForVerdadeEuFalo('Olá');

// Qualquer número diferente de 0 é truthy.
seForVerdadeEuFalo(1);

// Números negativos também são truthy.
seForVerdadeEuFalo(-5);

// O valor booleano true é truthy.
seForVerdadeEuFalo(true);

// Arrays são objetos e são considerados truthy,
// mesmo quando estão vazios.
seForVerdadeEuFalo([]);

// Objetos são considerados truthy,
// mesmo quando estão vazios.
seForVerdadeEuFalo({});