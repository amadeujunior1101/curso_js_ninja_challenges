/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let qualquer = [1, 3, 6, 10, 20];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function recebeArray(arg) {
  return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(recebeArray(qualquer)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function doisParametros(array, index) {
  return array[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let arrayTiposDiferentes = ["João", 10, true, { a: 1 }, [1, 2]];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(doisParametros(arrayTiposDiferentes, 0));
console.log(doisParametros(arrayTiposDiferentes, 1));
console.log(doisParametros(arrayTiposDiferentes, 2));
console.log(doisParametros(arrayTiposDiferentes, 3));
console.log(doisParametros(arrayTiposDiferentes, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookName) {
  let objBookAlls = {
    "Javascript 1": {
      quantidadePaginas: 200,
      autor: "Pedro",
      editora: "Moderna",
    },
    "Javascript 2": {
      quantidadePaginas: 300,
      autor: "Manoel",
      editora: "Atlas",
    },
    "Javascript 3": {
      quantidadePaginas: 400,
      autor: "Carlos",
      editora: "Cultura",
    },
  };
  return bookName === undefined ? objBookAlls : objBookAlls[bookName];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

let propBookName = "Javascript 3";

console.log(
  `O livro ${propBookName} tem ${book(propBookName).quantidadePaginas} páginas!`
);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro ${propBookName} é ${book(propBookName).autor}.`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(
  `O livro ${propBookName} foi publicado pela editora ${
    book(propBookName).editora
  }.`
);