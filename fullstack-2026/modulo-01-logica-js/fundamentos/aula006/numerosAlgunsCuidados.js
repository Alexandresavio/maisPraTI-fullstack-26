console.log(7/0); // No JavaScript, dividir um número por zero não gera erro. O resultado é Infinity (infinito).

console.log("10"/2); //O JavaScript faz uma conversão automática de tipos (coerção).

console.log("Show"*2);//O JavaScript tenta converter "Show" em número, mas isso não é possível.

/**Computadores representam números decimais em binário.
Alguns valores decimais não conseguem ser representados exatamente.
Isso causa pequenas imprecisões matemáticas em ponto flutuante */
console.log(0.1 + 0.7);

/* O JavaScript interpreta:
   10. como número decimal, e não entende corretamente o método logo após.
*/
//console.log(10.toString()) vai gerar erro! 


console.log((10.354).toFixed(2)); //Arredonda o número para 2 casas decimais.