// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(num1, num2) {
  return num1 + num2;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
let somaAdd = soma(2, 4) + 5;

// Qual o valor atualizado dessa variável?
11;

// Declare uma nova variável, sem valor.
let novoValor;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function alteraVariavel() {
  novoValor = 10;
  return "O valor da variável agora é: " + novoValor;
}

// Invoque a função criada acima.
alteraVariavel();

// Qual o retorno da função? (Use comentários de bloco).
/* O valor da variável agora é: 10 */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function verificaArgumentos(num1, num2, num3) {
  if (num1 === undefined || num2 === undefined || num3 === undefined)
    return "Preencha todos os valores corretamente!";
  return num1 * num2 * num3 + 2;
}

// Invoque a função criada acima, passando só dois números como argumento.
verificaArgumentos(1, 3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/* Preencha todos os valores corretamente! */

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
verificaArgumentos(1, 3, 4);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
14;

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function recebeArgumentos(num1, num2, num3) {
  if (num1 != undefined && num2 === undefined && num3 === undefined)
    return num1;
  else if (num1 != undefined && num2 != undefined && num3 === undefined)
    return num1 + num2;
  else if (num1 != undefined && num2 != undefined && num3 != undefined)
    return (num1 + num2) / num3;
  else if (num1 === undefined && num2 != undefined && num3 === undefined)
    return num2;
  else if (num1 === undefined && num2 != undefined && num3 != undefined)
    return num2 + num3;
  else if (num1 === undefined && num2 === undefined && num3 != undefined)
    return num3;
  else return null;
  // if (num1 != undefined && num2 != undefined && num3 != undefined)
  //   return num2 + num3;
}
console.log(recebeArgumentos(2));
console.log(recebeArgumentos(2, 4));
console.log(recebeArgumentos(2, 4, 2));
console.log(recebeArgumentos());

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
//?
