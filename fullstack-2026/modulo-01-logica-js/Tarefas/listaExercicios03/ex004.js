/**
 * Crie um objeto onde cada chave é o nome de um item e o valor é a quantidade 
no inventário do jogador (ex: { espada: 1, poção: 5, escudo: 2 }). Use for...in para 
listar  o  inventário  completo.  Permita  que  o  usuário informe um item para usar: 
reduza a quantidade em 1 ou exiba "item esgotado" se for zero.
 */
const prompt = require("prompt-sync")();
let resposta = null;
do {

    console.log("---------------------------------------");
    console.log(" Quantidades de itens no seu inventário");
    console.log("---------------------------------------");
    const inventario = {
        espada: 1,
        pocao: 5,
        escudo: 2
    }
    for (let item in inventario) {
        console.log(`${item}: ${inventario[item]}`);
    }

    let itemEscolhido = String(prompt("Selecione um item para usar:").toLowerCase());

    if (itemEscolhido === "espada") {
        --inventario.espada
        console.log("item esgotado");
    } else if (itemEscolhido === "escudo") {
        --inventario.escudo;
        console.log(`Resta ${inventario.escudo}`)
    } else if (itemEscolhido === "pocao") {
        --inventario.pocao;
        console.log(`Resta ${inventario.pocao}`)
    } else {
        console.log("Item não existe no inventário")
    }
    resposta = String(prompt("deseja continuar? [S] ou [N]").toLowerCase());
} while (resposta !== "n");
console.log("Inventário fechado")