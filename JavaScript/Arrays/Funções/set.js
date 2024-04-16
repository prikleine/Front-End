const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const nomesAtualizados = new Set(nomes);

// Se tentarmos utilizar métodos de array com o Set, ele não vai funcionar. - Erro
// nomesAtualizados.push('Juliana');

// o Set parece um array, mas ele não tem acesso aos métodos de array

console.log(nomesAtualizados);

// Transformar esse conjunto Set em um array.
// o operador de espalhamento, ou seja, as reticências (...)
const listaNomesAtualizados = [...nomesAtualizados];
console.log(listaNomesAtualizados);