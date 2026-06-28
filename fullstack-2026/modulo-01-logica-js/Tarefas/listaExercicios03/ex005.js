/**
 * Crie  um  objeto  representando  o  orçamento  mensal  de  uma  pessoa,  com categorias  como  alimentação,  transporte,  lazer  e  saúde,  cada  uma  com  valor planejado e valor gasto. Use for...in para percorrer as categorias e exibir se cada uma ficou dentro ou acima do orçamento, e calcule o saldo geral do mês. 
 */

const prompt = require("prompt-sync")();

console.log("-------------------------------------");
console.log("      ORÇAMENTO MENSAL");
console.log("-------------------------------------");

const orcamento = {
    alimentacao: {},
    transporte: {},
    lazer: {},
    saude: {}
};

for (let categoria in orcamento) {

    console.log(`\nCategoria: ${categoria}`);

    orcamento[categoria].planejado = Number(
        prompt("Valor planejado: R$ ")
    );

    orcamento[categoria].gasto = Number(
        prompt("Valor gasto: R$ ")
    );
}

let totalPlanejado = 0;
let totalGasto = 0;

console.log("\n-------------------------------------");
console.log("RELATÓRIO DO ORÇAMENTO");
console.log("-------------------------------------");


for (let categoria in orcamento) {

   
    let planejado = orcamento[categoria].planejado;
    let gasto = orcamento[categoria].gasto;

    
    totalPlanejado += planejado;
    totalGasto += gasto;

    
    if (gasto <= planejado) {

        console.log(
            `${categoria}: Dentro do orçamento.`
        );

    } else {

        console.log(
            `${categoria}: Acima do orçamento.`
        );

    }
}

let saldo = totalPlanejado - totalGasto;

console.log("\n-------------------------------------");
console.log(`Total planejado : R$ ${totalPlanejado.toFixed(2)}`);
console.log(`Total gasto     : R$ ${totalGasto.toFixed(2)}`);
console.log(`Saldo do mês    : R$ ${saldo.toFixed(2)}`);
