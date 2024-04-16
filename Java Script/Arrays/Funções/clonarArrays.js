const notas = [7, 7, 8, 9];

let nota = 9.75;
// Assim nao pode - novaNota se referencia a nota:
let novaNota = nota;

nota = 10; 

console.log(nota);
console.log(novaNota);

// Para clonar um array vc precisa: sintaxe do spread operator.
const novaListaNotas = [...notas];

// Para adicionar o numero 10:
// igual: novaListaNotas.push(10);
const novaListaNotas2 = [...notas, 10];
