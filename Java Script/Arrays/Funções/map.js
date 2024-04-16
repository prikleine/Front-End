const notas = [10, 9.5, 8, 7, 6];

// funçao map tradicional
// O forEach() não retorna nada, portanto, é para quando não precisamos de retorno. 
// Caso contrário, quando precisamos que o resultado do processamento seja capturado e guardado em outro array, 
// precisamos usar o map(). Essa é uma das principais diferenças entre o forEach() e o map().

const notasAtualizadas = notas.map(function (nota) { 
    return nota + 1;
})

// arrow function - sintaxe um pouco mais concisa
//const notasAtualizadas = notas.map((nota) => {
//     return nota + 1;
// })
// ou 
// notasAtualizadas = notas.map((nota) => nota + 1)

const notasAtualizadas2 = notas.map((nota) => nota + 1 >= 10 ? 10: nota + 1);
//  sintaxe do operador ternário
// Se for maior ou igual a 10, então >=10, retornamos 10 (? - se;  10 apos o ? caso verdadeiro, ou seja, 10 é a nota máxima)
// Se não for (representado por :), se nota + 1 for menor que 10, então nota + 1

console.log(notasAtualizadas2);


const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());

console.log(nomesPadronizados);

