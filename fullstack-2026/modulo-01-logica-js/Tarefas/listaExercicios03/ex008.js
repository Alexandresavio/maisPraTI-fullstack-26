/**
 * Crie um array de objetos representando produtos com nome, preço e quantidade. 
Use  forEach  para  calcular  o  valor  total  em  estoque  de  cada  produto  (preço × 
quantidade)  e  exibir  um  relatório.  Ao  final,  exiba  o  valor  total  geral  de  todo  o 
estoque.
 */

const produtos = [
    { nome: "Mouse", preco: 80, quantidade: 10 },
    { nome: "Teclado", preco: 150, quantidade: 5 },
    { nome: "Monitor", preco: 900, quantidade: 3 }
];

let totalGeral = 0;

produtos.forEach(produto => {

    let totalProduto = produto.preco * produto.quantidade;

    console.log(
        `${produto.nome} -> R$ ${totalProduto.toFixed(2)}`
    );

    totalGeral += totalProduto;

});

console.log(`Valor total do estoque: R$ ${totalGeral.toFixed(2)}`);