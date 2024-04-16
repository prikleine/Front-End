const listaEstudantes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

/* método splice substitui os elementos na posição X e Y (no exemplo abaixo 1 e 2) 
 por um outro elemento (no exemplo 'Rodrigo')
*/
listaEstudantes.splice(1, 2, 'Rodrigo');

console.log(listaEstudantes);


const salaJS = ['Evaldo', 'Camis', 'Mari'];
const salaPython = ['Ju', 'Leo', 'Raquel'];

//concatenar 2 arrays:

const salasUnificadas = salaJS.concat(salaPython);
console.log(salasUnificadas);

// array dentro de array:

const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

console.log(
`a aluna da posição 1 da lista é: ${lista[0][1]}.
a nota dessa aluna é ${lista[1][1]}`
);

console.log(lista);


function exibeNomeENota(aluno) {
    if (lista[0].includes(aluno)) {
        const [alunos, medias] = lista; //desestruturando uma lista
        const indice = alunos.indexOf(aluno);
        const mediaAluno = medias[indice];
        console.log(`${aluno} tem a média ${mediaAluno}`);
        } else {
        console.log('Estudante não existe na lista');
        }
    }
    
exibeNomeENota('Juliana');
exibeNomeENota('Vini');
