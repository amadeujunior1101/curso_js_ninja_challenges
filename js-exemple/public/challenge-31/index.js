(function (DOM) {
    "use strict";

    /*
Agora vamos criar a funcionalidade de "remover" um carro. Adicione uma nova
coluna na tabela, com um botão de remover.
Ao clicar nesse botão, a linha da tabela deve ser removida.
Faça um pull request no seu repositório, na branch `challenge-31`, e cole
o link do pull request no `console.log` abaixo.
Faça um pull request, também com a branch `challenge-31`, mas no repositório
do curso, para colar o link do pull request do seu repo.
*/

    var app = (function () {
        let $tableCar = DOM('[data-js="table-car"]').get();
        let $formRegister = DOM('[data-js="form-register"]').get();
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
                $tableCar.setAttribute("style", "display: block");
                document
                    .querySelector(".container")
                    .setAttribute("style", "display: flex; justify-content: center;");

                $formRegister.setAttribute(
                    "style",
                    "width: 50%; display: flex; justify-content: center;"
                );

                let $fragment = document.createDocumentFragment();
                let $tr = document.createElement("tr");
                let $tdImage = document.createElement("td");
                let $image = document.createElement("img");
                let $tdBrand = document.createElement("td");
                let $tdYear = document.createElement("td");
                let $tdPlate = document.createElement("td");
                let $tdColor = document.createElement("td");
                let $tdButton = document.createElement("td");

                $image.src = DOM('[data-js="image"]').get().value;
                $tdImage.appendChild($image);

                $tdBrand.textContent = DOM('[data-js="brand-model"]').get().value;
                $tdYear.textContent = DOM('[data-js="year"]').get().value;
                $tdPlate.textContent = DOM('[data-js="plate"]').get().value;
                $tdColor.textContent = DOM('[data-js="color"]').get().value;

                $tdButton = document.createElement("button");
                $tdButton.innerHTML = "Remover";
                $tdButton.addEventListener("click", this.removeRow, false);

                $tr.appendChild($tdImage);
                $tr.appendChild($tdBrand);
                $tr.appendChild($tdYear);
                $tr.appendChild($tdPlate);
                $tr.appendChild($tdColor);
                $tr.appendChild($tdButton);

                return $fragment.appendChild($tr);
            },
            removeRow: function removeRow() {
                console.log(this)
                // if (!this === undefined) return console.log("Sem itens na tabela!");
                return this.parentElement.remove();
            },
            companyInfo: function companyInfo() {
                const ajax = new XMLHttpRequest();
                ajax.open("GET", "/challenge-31/company.json", true);
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

                $tableCar.setAttribute("style", "display: none");
                $formRegister.setAttribute(
                    "style",
                    "width: 100%; display: flex; justify-content: center;"
                );

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
