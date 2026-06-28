/**
 * Implemente  uma  fila  usando  um  array  para  simular  o  atendimento  de  uma 
clínica.  Crie  as  funções  chegarPaciente(nome)  (enqueue),  chamarProximo() 
(dequeue) e exibirFila(). Simule a chegada de 5 pacientes e o atendimento de 3, 
exibindo o estado da fila a cada operação.
 */


const fila = [];

function chegarPaciente(nome) {

    fila.push(nome);

    exibirFila();

}

function chamarProximo() {

    let paciente = fila.shift();

    console.log("Atendido:", paciente);

    exibirFila();

}

function exibirFila() {

    console.log(fila);

}

chegarPaciente("Ana");
chegarPaciente("Pedro");
chegarPaciente("Lucas");
chegarPaciente("Maria");
chegarPaciente("Carlos");

chamarProximo();
chamarProximo();
chamarProximo();