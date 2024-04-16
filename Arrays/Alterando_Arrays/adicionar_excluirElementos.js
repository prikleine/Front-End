const notas = [10, 6, 8];
//para adicionar nota a lista
notas.push(7);
//para excluir o ultimo elemento
notas.pop();

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);
//toFixed para fixar o numero de casas após a vírgula
console.log(media.toFixed(2));



/*
Valores "falsy" em JavaScript são aqueles que, ao serem convertidos para booleanos, são interpretados como falso. Isso inclui:

Zero: O valor numérico zero (0);
String vazia (''): Uma string sem nenhum caractere;
NaN: Representa "Not-A-Number", frequentemente resultante de operações matemáticas inválidas;
null: Indica a ausência intencional de um valor ou referência nula;
undefined: Indica uma variável que foi declarada, mas ainda não teve um valor atribuído.
Valores "truthy", por outro lado, são valores que, quando convertidos para booleanos, são interpretados como verdadeiros. Estes incluem:

Strings não vazias: Qualquer string que contenha pelo menos um caractere;
Números diferentes de zero: Qualquer número que não seja zero, incluindo números negativos e decimais;
Arrays: Mesmo um array vazio é considerado "truthy";
Objetos: Objetos em JavaScript são "truthy", mesmo se estiverem vazios;


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
*/


