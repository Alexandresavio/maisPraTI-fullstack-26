/**
 * Simule um carrinho de compras: leia nomes e preços de produtos em um laço até 
 * o usuário digitar "sair". Armazene em arrays. Ao final, liste todos os itens, exiba o 
 * subtotal, aplique 10% de desconto se houver mais de 3 itens e mostre o total a pagar. 
 */

console.log("----------------------------------------------------------");
console.log("                CARRINHO DE COMPRAS                       ");
console.log("----------------------------------------------------------");

const prompt = require("prompt-sync")();

let produtos = [];
let precos = [];

while (true) {

    let nome = prompt("Nome do produto (ou sair): ");

    if (nome.toLowerCase() === "sair") {
        break;
    }

    let preco = Number(prompt("Preço: "));

    produtos.push(nome);
    precos.push(preco);
}

let subtotal = 0;

for (let preco of precos) {
    subtotal += preco;
}

let desconto = 0;

if (produtos.length > 3) {
    desconto = subtotal * 0.10;
}

let total = subtotal - desconto;

console.log("\nItens do carrinho:");

for (let i = 0; i < produtos.length; i++) {
    console.log(`${produtos[i]} - R$ ${precos[i].toFixed(2)}`);
}

console.log(`Subtotal: R$ ${subtotal.toFixed(2)}`);
console.log(`Desconto: R$ ${desconto.toFixed(2)}`);
console.log(`Total: R$ ${total.toFixed(2)}`);