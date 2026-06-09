/**
 * Defina uma senha fixa no código. 
 * Peça ao usuário que a digite e, usando um laço 
 * do .while, permita no máximo 3 tentativas.
 * Exiba se ele acertou ou se esgotou as tentativas.  
 */

console.log("----------------------------------------------------------");
console.log("                 SISTEMA DE LOGIN                         ");
console.log("----------------------------------------------------------");

const prompt = require("prompt-sync")();

const senhaCorreta = "1234";

let tentativa;
let tentativas = 0;

do {

    tentativa = prompt("Digite a senha: ");
    tentativas++;

    if (tentativa === senhaCorreta) {
        console.log("Acesso permitido.");
        break;
    }

    console.log("Senha incorreta.");

} while (tentativas < 3);

if (tentativa !== senhaCorreta) {
    console.log("Número máximo de tentativas excedido.");
}