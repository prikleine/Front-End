const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

//funçao callback - função que usa como parâmetro outra função
notas.forEach()(function (nota) {
    somaDasNotas += nota;
})
// O forEach() não retorna nada, portanto, é para quando não precisamos de retorno. 

const media = somaDasNotas / notas.length;

console.log(`a média das notas é ${media}`);
