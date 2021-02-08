/*
Crie um array com 5 items (tipos variados).
*/
let arr = ["javascript", 100, true, { a: 1 }, [1]];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(item) {
  arr.push(item);
  return arr;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log(addItem(["algoritmos", true, { b: 2 }]));

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
// let sizeArr = arr.length - 1; pra descobrir o tamanho do array.
// console.log(`O segundo elemento do segundo array é ${arr[sizeArr][1]}.`);
// console.log(`O segundo elemento do segundo array é ${arr[5][1]}.`);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O primeiro array tem ${arr.length} itens.`);

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O segundo array tem ${arr[5].length} itens.`);

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log("####Números pares com while!####");

let startPares = 10;
let endPares = 20;
while (startPares <= endPares) {
  if (startPares % 2 == 0) {
    console.log("Números pares entre 10 e 20: " + startPares);
  }
  startPares++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log("####Números ímpares com while!####");
let startImpares = 10;
let endImpares = 20;
while (startImpares <= endImpares) {
  if (startImpares % 2 != 0) {
    console.log("Números ímpares entre 10 e 20: " + startImpares);
  }
  startImpares++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log("####Números pares com for!####");
let startParesFor = 100;
let endParesFor = 120;
for (startParesFor; startParesFor <= endParesFor; startParesFor++) {
  if (startParesFor % 2 == 0) {
    console.log("Números pares entre 100 e 120: " + startParesFor);
  }
}

console.log("####Números ímpares com for!####");
let startImparesFor = 111;
let endImparesFor = 125;
for (startImparesFor; startImparesFor <= endImparesFor; startImparesFor++) {
  if (startImparesFor % 2 != 0) {
    console.log("Números ímpares entre 111 e 125: " + startImparesFor);
  }
}
