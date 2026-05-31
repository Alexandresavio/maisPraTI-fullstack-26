function soBoaNoticia(nota){
    if(nota >= 7){
        console.log(`Aprovado com nota ${nota}`);
    }
}
soBoaNoticia(8.1);
soBoaNoticia(6.1);

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log(`É verdade... ${valor}`);
    }
}
seForVerdadeEuFalo('Olá');
seForVerdadeEuFalo(1);
seForVerdadeEuFalo(-5);
seForVerdadeEuFalo(true);
seForVerdadeEuFalo([]);
seForVerdadeEuFalo({});