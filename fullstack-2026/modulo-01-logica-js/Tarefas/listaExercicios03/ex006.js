/**
 * Crie um array de objetos representando músicas, cada uma com título, artista e duração em segundos. Use for...of para exibir cada música no formato "Artista — 
Título  (mm:ss)".  Ao  final,  use  forEach  para  somar  a  duração  total e exiba-a no mesmo formato
 */

const musicas = [
    { titulo: "Numb", artista: "Linkin Park", duracao: 185 },
    { titulo: "Bohemian Rhapsody", artista: "Queen", duracao: 354 },
    { titulo: "Believer", artista: "Imagine Dragons", duracao: 204 }
];

console.log("Lista de músicas:");

for (const musica of musicas) {
    let minutos = Math.floor(musica.duracao / 60);
    let segundos = musica.duracao % 60;

    console.log(`${musica.artista} - ${musica.titulo} (${minutos}:${segundos.toString().padStart(2, "0")})`);
}

let total = 0;

musicas.forEach(musica => {
    total += musica.duracao;
});

let min = Math.floor(total / 60);
let seg = total % 60;

console.log(`Tempo total: ${min}:${seg.toString().padStart(2, "0")}`);