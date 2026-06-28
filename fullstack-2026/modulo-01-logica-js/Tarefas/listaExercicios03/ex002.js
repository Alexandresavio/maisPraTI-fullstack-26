/**
 * Crie  dois  objetos  representando  personagens  de  um  jogo,  cada  um  com  as 
propriedades: nome, vida, ataque e defesa. Use for...in para exibir os atributos de 
cada  personagem  lado  a  lado  e  determine  qual  deles  tem  maior  poder  total 
(soma de vida + ataque + defesa). 
 */

const mago = {
    nome: "Mago",
    vida: 1000,
    ataque: 500,
    defesa: 800
};

const guerreiro = {
    nome: "Guerreiro",
    vida: 1000,
    ataque: 900,
    defesa: 500
};

console.log("=== Personagens ===");

for (let atributo in mago) {
    console.log(`${atributo}: ${mago[atributo]} | ${guerreiro[atributo]}`);
}

let poderMago = 0;
let poderGuerreiro = 0;

for (let atributo in mago) {
    if (atributo !== "nome") {
        poderMago += mago[atributo];
        poderGuerreiro += guerreiro[atributo];
    }
}

console.log(`\nPoder total do ${mago.nome}: ${poderMago}`);
console.log(`Poder total do ${guerreiro.nome}: ${poderGuerreiro}`);

if (poderMago > poderGuerreiro) {
    console.log(`${mago.nome} possui o maior poder!`);
} else if (poderGuerreiro > poderMago) {
    console.log(`${guerreiro.nome} possui o maior poder!`);
} else {
    console.log("Os dois personagens possuem o mesmo poder!");
}