/*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."
  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */
(function (DOM) {
    "use-strict";

    function app() {
        let $formCEP = new DOM('[data-js="form-cep"]');
        let $inputCEP = new DOM('[data-js="input-cep"]');
        let $logradouro = new DOM('[data-js="logradouro"]');
        let $bairro = new DOM('[data-js="bairro"]');
        let $estado = new DOM('[data-js="estado"]');
        let $city = new DOM('[data-js="cidade"]');
        let $cep = new DOM('[data-js="cep"]');
        let $status = new DOM('[data-js="status"]');
        $formCEP.on("submit", handleSubmitFormCEP);
        let ajax = new XMLHttpRequest();

        function handleSubmitFormCEP(event) {
            event.preventDefault();
            let url = getUrl();
            ajax.open("GET", url);
            ajax.send();
            getMessage("loading");
            ajax.addEventListener("readystatechange", handleReadyStateChange);
            // console.log("CEP: ", onlyNumbers.toString().replaceAll(',', ''));
            // wwW77.96we0-000s-,0
        }

        function getUrl() {
            let onlyNumbers = clearCEP();
            return `https://ws.apicep.com/cep.json?code=${onlyNumbers}`;
        }

        function clearCEP() {
            return $inputCEP.get()[0].value.replace(/\D/g, "");
        }

        function handleReadyStateChange() {
            if (isRequestOk()) {
                fillCEPFields();
                getMessage("ok");
            }
            console.log("carregando...");
        }

        function isRequestOk() {
            return ajax.readyState === 4 && ajax.status === 200;
        }

        function fillCEPFields() {
            let data = parseData();
            console.log("existe ou não", data);
            if (!data) return getMessage("error");
            $logradouro.get()[0].textContent = data.address;
            $bairro.get()[0].textContent = data.district;
            $estado.get()[0].textContent = data.state;
            $city.get()[0].textContent = data.city;
            $cep.get()[0].textContent = data.code;
        }

        function parseData() {
            let result = null;
            try {
                result = JSON.parse(ajax.responseText);
            } catch (error) {
                result = null;
            }
            return result;
        }

        function getMessage(type) {
            let messages = {
                loading: replaceCEP("Buscando informações para o CEP [CEP]..."),
                ok: replaceCEP("Endereço referente ao CEP [CEP]:"),
                error: replaceCEP("Não encontramos o endereço para o CEP [CEP]."),
            };

            $status.get()[0].textContent = messages[type];
        }

        function replaceCEP(message) {
            return message.replace("[CEP]", clearCEP());
        }

        return {
            getMessage: getMessage,
            replaceCEP: replaceCEP,
        };
    }

    window.app = app();
    app();
})(window.DOM);
