/**
 * Implemente  uma  lista  ligada  simples  usando  nós  ({  valor,  proximo  }).  Crie  as 
funções  adicionar(tarefa),  remover(tarefa)  e  exibir() que percorre todos os nós. 
Simule um gerenciador de tarefas: adicione 4 tarefas, remova uma pelo nome e 
exiba a lista antes e depois.
 */



class No {

    constructor(valor) {

        this.valor = valor;
        this.proximo = null;

    }

}

class ListaLigada {

    constructor() {

        this.inicio = null;

    }

    adicionar(valor) {

        const novo = new No(valor);

        if (this.inicio == null) {

            this.inicio = novo;

            return;
        }

        let atual = this.inicio;

        while (atual.proximo != null) {

            atual = atual.proximo;

        }

        atual.proximo = novo;

    }

    remover(valor) {

        if (!this.inicio) return;

        if (this.inicio.valor === valor) {

            this.inicio = this.inicio.proximo;

            return;
        }

        let atual = this.inicio;

        while (atual.proximo != null &&
               atual.proximo.valor !== valor) {

            atual = atual.proximo;

        }

        if (atual.proximo != null) {

            atual.proximo = atual.proximo.proximo;

        }

    }

    exibir() {

        let atual = this.inicio;

        while (atual != null) {

            console.log(atual.valor);

            atual = atual.proximo;

        }

    }

}

const tarefas = new ListaLigada();

tarefas.adicionar("Estudar JavaScript");
tarefas.adicionar("Fazer exercícios");
tarefas.adicionar("Treinar lógica");
tarefas.adicionar("Enviar atividade");

console.log("Antes:");

tarefas.exibir();

tarefas.remover("Fazer exercícios");

console.log("Depois:");

tarefas.exibir();