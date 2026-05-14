const usuario = ("Rebeca");
//Concatenando strings com +
const concatenacao = ("Olá "+usuario+"!");
console.log(concatenacao);

//Template String (crase e ${})
const nome = 'João';
const idade = 30;
const mensagem = `Olá, meu nome é ${nome} e eu tenho ${idade} anos.`;
console.log(mensagem); // Saída: "Olá, meu nome é João e eu tenho 30 anos."

//Template String (crase e ${})
const preco = 100;
const desconto = 0.1;
const precoFinal = `O preço do produto é ${preco}. Com um desconto de ${desconto * 100}%, o novo preço é ${preco * (1 - desconto)}.`;
console.log(precoFinal);
// Saída: "O preço do produto é $100. Com um desconto de 10%, o novo preço é $90."

/**
 * Função Arrow dentro de Template String:
 * Cria uma função chamada up
 * Ela recebe um parâmetro chamado texto
 * toUpperCase() transforma tudo em maiúsculo
 */
const up = texto => texto.toUpperCase();
console.log(`Ei... ${up("cuidado")}!`);
/**
 * Usa template string chama a função up("cuidado") insere o resultado dentro de ${}
 */