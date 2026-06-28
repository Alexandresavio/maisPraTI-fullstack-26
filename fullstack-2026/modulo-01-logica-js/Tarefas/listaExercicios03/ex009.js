/**
 * Crie  um  array  de  objetos onde cada objeto representa um contato com nome, 
telefone e e-mail. Use forEach para listar todos os contatos formatados. Permita 
buscar  um  contato  pelo nome usando for...of e exiba os dados encontrados ou 
uma mensagem de "não encontrado".
 */

const prompt = require("prompt-sync")();

const contatos = [
    {
        nome: "Ana",
        telefone: "99999-9999",
        email: "ana@email.com"
    },
    {
        nome: "Pedro",
        telefone: "98888-8888",
        email: "pedro@email.com"
    },
    {
        nome: "Lucas",
        telefone: "97777-7777",
        email: "lucas@email.com"
    }
];

console.log("Lista de contatos:");

contatos.forEach(contato => {

    console.log("------------------------");
    console.log(`Nome: ${contato.nome}`);
    console.log(`Telefone: ${contato.telefone}`);
    console.log(`Email: ${contato.email}`);

});

let busca = prompt("Digite o nome: ");

let encontrado = false;

for (const contato of contatos) {

    if (contato.nome.toLowerCase() === busca.toLowerCase()) {

        console.log(contato);

        encontrado = true;

        break;
    }

}

if (!encontrado) {
    console.log("Contato não encontrado.");
}