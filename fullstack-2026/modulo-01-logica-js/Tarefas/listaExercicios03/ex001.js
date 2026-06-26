/**
 * Crie  um  objeto  representando  um  produto  com  as  propriedades:  nome, preço,
 * categoria  e quantidade em estoque. Use for...in para percorrer e exibir todas as 
 * propriedades  e  seus  valores.  Em  seguida,  adicione  uma  nova  propriedade 
 * desconto ao objeto e exiba o preço final calculado. 
 */
const prompt = require("prompt-sync")();

const produto = {
    categoria: "smartphone",
    nome: "sansung S25",
    preco: 2499.99,
    estoque: 15
};

console.log("Produto:");

for(let propriedade in produto){
    console.log(`${propriedade}:${produto[propriedade]}`);
}

console.log("Possui cupom de desconto?");
let cupomDesconto = Number(prompt("Digite 1 [S] ou 2 [N]: "));

if (cupomDesconto === 1) {
    produto.desconto = 20;
} else {
    produto.desconto = 0;
}

console.log("\nProduto atualizado:");

for(let propriedade in produto){
    console.log(`${propriedade}:${produto[propriedade]}`);
}
let precoFinal = produto.preco - (produto.preco * produto.desconto / 100);
console.log(`\nPreço final: R$ ${precoFinal.toFixed(2)}`);