const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

const tamanhoNome = alunos.filter((aluno) => {
  return aluno.length < 4;
});
console.log(tamanhoNome);

const reprovados = alunos.filter((aluno, indice) => {
  return medias[indice] < 7;
});

console.log(reprovados);

// o callback não utiliza mais o primeiro parâmetro `aluno` mas é necessario preservar a ordem do parâmetro.
// pode substituir o nome por `_`. Marcação do lugar do parâmetro não utilizado.
const aprovados = alunos.filter((_, indice) => {
    return medias[indice] >= 7;
});

console.log(aprovados);