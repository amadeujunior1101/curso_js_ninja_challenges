(function () {
  /*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

  /*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
  // ?
  console.log('Propriedades de "person":');

  let person = {
    name: "Nelson",
    lastname: "Rodrigues",
    age: 60,
  };

  /*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
  console.log(Object.keys(person));

  /*
Crie um array vazio chamado `books`.
*/
  let books = [];

  /*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
  // ?
  console.log("\nLista de livros:");
  let book1 = {
    name: "Js Ninja",
    pages: 300,
  };
  let book2 = {
    name: "Nosql",
    pages: 200,
  };
  let book3 = {
    name: "Java",
    pages: 250,
  };

  books.push(book1);
  books.push(book2);
  books.push(book3);

  /*
Mostre no console todos os livros.
*/
  console.log(books);

  console.log("\nLivro que está sendo removido:");
  /*
Remova o último livro, e mostre-o no console.
*/
  let removedBook = books.pop();
  console.log(removedBook);

  console.log("\nAgora sobraram somente os livros:");
  /*
Mostre no console os livros restantes.
*/
  console.log(books);

  /*
Converta os objetos que ficaram em `books` para strings.
*/
  // ?
  console.log("\nLivros em formato string:");
  let convertedStringBooks = JSON.stringify(books);
  /*
Mostre os livros nesse formato no console:
*/
  console.log(convertedStringBooks);

  /*
Converta os livros novamente para objeto.
*/
  let convertedObjectgBooks = JSON.parse(convertedStringBooks);
  console.log("\nAgora os livros são objetos novamente:");

  /*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/

  for (let i = 0; i < books.length; i++) {
    for (let prop in books[i]) {
      console.log(prop + ": " + books[i][prop]);
    }
  }

  /*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
  let myName = ["A", "M", "A", "D", "E", "U"];
  console.log("\nMeu nome é:");

  /*
Juntando todos os itens do array, mostre no console seu nome.
*/
  console.log(myName.join(" "));

  console.log("\nMeu nome invertido é:");

  /*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
  console.log(myName.reverse().join(" "));

  console.log("\nAgora em ordem alfabética:");
  /*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
  console.log(myName.sort());
})();
