(function (DOM) {
    "use strict";

    /*
A loja de carros será nosso desafio final. Na aula anterior, você fez a parte
do cadastro dos carros. Agora nós vamos começar a deixar ele com cara de
projeto mesmo.
Crie um novo repositório na sua conta do GitHub, com o nome do seu projeto.
Na hora de criar, o GitHub te dá a opção de criar o repositório com um
README. Use essa opção.
Após criar o repositório, clone ele na sua máquina.
Crie uma nova branch chamada `challenge-30`, e copie tudo o que foi feito no
desafio da aula anterior para esse novo repositório, nessa branch
`challenge-30`.
Adicione um arquivo na raiz desse novo repositório chamado `.gitignore`.
O conteúdeo desse arquivo deve ser somente as duas linhas abaixo:
node_modules
npm-debug.log
Faça as melhorias que você achar que são necessárias no seu código, removendo
duplicações, deixando-o o mais legível possível, e então suba essa alteração
para o repositório do seu projeto.
Envie um pull request da branch `challenge-30` para a `master` e cole aqui
nesse arquivo, dentro do `console.log`, o link para o pull request no seu
projeto.
*/

    var app = (function () {
        let $tableCar = DOM('[data-js="table-car"]').get();
        return {
            init: function init() {
                console.log("app init");
                this.companyInfo();
                this.initEvents();
            },
            initEvents: function initEvents() {
                DOM('[data-js="form-register"]').on("submit", this.handleSubmit);
            },
            handleSubmit: function handleSubmit(e) {
                e.preventDefault();

                // console.log($tableCar)
                $tableCar.appendChild(app.createNewCar());
            },
            createNewCar: function createNewCar() {
                $tableCar.style.display = "block";
                let $fragment = document.createDocumentFragment();
                let $tr = document.createElement("tr");
                let $tdImage = document.createElement("td");
                let $image = document.createElement("img");
                let $tdBrand = document.createElement("td");
                let $tdYear = document.createElement("td");
                let $tdPlate = document.createElement("td");
                let $tdColor = document.createElement("td");

                $image.src = DOM('[data-js="image"]').get().value;
                $tdImage.appendChild($image);

                $tdBrand.textContent = DOM('[data-js="brand-model"]').get().value;
                $tdYear.textContent = DOM('[data-js="year"]').get().value;
                $tdPlate.textContent = DOM('[data-js="plate"]').get().value;
                $tdColor.textContent = DOM('[data-js="color"]').get().value;

                $tr.appendChild($tdImage);
                $tr.appendChild($tdBrand);
                $tr.appendChild($tdYear);
                $tr.appendChild($tdPlate);
                $tr.appendChild($tdColor);

                return $fragment.appendChild($tr);
            },
            companyInfo: function companyInfo() {
                const ajax = new XMLHttpRequest();
                ajax.open("GET", "/challenge-30/company.json", true);
                ajax.send();
                ajax.addEventListener("readystatechange", this.getCompanyInfo, false);
            },
            getCompanyInfo: function getCompanyInfo() {
                if (!app.isReady.call(this)) return;
                const data = JSON.parse(this.responseText);

                // let $table = DOM('[data-js="table-car"]').get();
                let $titlePage = DOM('[data-js="title-page"]').get();
                let $companyName = DOM('[data-js="company-name"]').get();
                let $companyPhone = DOM('[data-js="company-phone"]').get();

                $tableCar.style.display = "none";
                $titlePage.textContent = data.name;
                $companyName.textContent = data.name;
                $companyPhone.textContent = data.phone;
            },
            isReady: function isReady() {
                return this.readyState === 4 && this.status === 200;
            },
        };
    })();
    app.init();
})(window.DOM);
