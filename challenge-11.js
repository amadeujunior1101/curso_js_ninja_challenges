(function() {
    // Envolva todo o código desse arquivo em uma IIFE (incluindo esse comentário).

    /*
Crie uma variável chamada `once`, que recebe `false` como seu valor.
Crie um loop que execute enquanto essa variável for verdadeira. Dentro do
loop, mostre no console a mensagem:
'Entrou ao menos uma vez!'
Qual loop você deve usar para que essa mensagem seja mostrada no console?
*/
    let once = false;
    do {
        console.log("Entrou ao menos uma vez!");
        once = true;
    } while (once === false);
    /*
Crie um objeto chamado `person`, que receba as seguintes propriedades:
- 'name', 'age', 'weight' e 'birthday'. Preencha com os valores corretos
para o nome, idade, peso e data de nascimento dessa pessoa.
*/
    let person = {
        name: "João",
        age: 25,
        weight: 30,
        birthday: "20/10/1990",
    };

    /*
Use um loop para percorrer o objeto criado acima, mostrando no console
a frase:
'The [PROPERTY] of person is [VALUE]'
Aproveite e crie uma variável `counter` que vai contar quantas propriedades
esse objeto tem.
Após o loop, mostre a frase:
'The person has [COUNTER] properties'
*/
    let counter = 0;
    for (const key in person) {
        console.log(`The ${key} of person is ${person[key]}`);
        counter += 1;
    }

    console.log(`The person has ${counter} properties`);

    /*
Crie uma função chamada `moreThan`, que vai verificar se a pessoa (objeto
criado acima) é mais velha que a idade passada por parâmetro.
Se verdadeiro, retornar `true`. Senão, retornar false.
Após a função, mostrar a mensagem no console:
'The person has more than 25 years old? [TRUE/FALSE]'
*/
    function moreThan() {
        return person.age > 25 ? true : false;
    }

    console.log(`The person has more than 25 years old? ${moreThan()}`);

    /*
Faça um loop de 0 a 20, que adicione cada número como um item de um
array chamado `numbers`. Se o contador for maior que 10, saia do loop.
Mostre no console os números no array.
*/
    console.log("De 0 a 10:");

    let counter2 = 0;

    let numbers = [];

    do {
        if (counter2 > 10) {
            break;
        }

        numbers.push(counter2);

        counter2 += 1;
    } while (counter2 <= 10);

    console.log(numbers);

    /*
Faça outro loop de 0 a 20, que adicione a um array chamado `numbers` (já
criado acima, só precisa ser reiniciado) números de 0 a 20, inclusive
esses. Se o número for ímpar, pular para o próximo número.
Mostrar no console os números do array.
*/
    console.log("Pares de 0 a 20:");
    let numbers2 = [];

    for (let counter3 = 0; counter3 <= 20; counter3++) {
        if (counter3 % 2 !== 0) {
            continue;
        }
        numbers2.push(counter3);
    }

    console.log(numbers2);
})();