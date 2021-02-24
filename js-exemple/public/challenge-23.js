(function (win, doc) {
    "use strict";

    const $visor = doc.querySelector('[data-js="visor"]');
    const $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');
    const $buttonsOperations = doc.querySelectorAll('[data-js="button-operation"]');
    const $buttonsCE = doc.querySelector('[data-js="button-ce"]');
    const $buttonEqual = doc.querySelector('[data-js="button-equal"]');

    Array.prototype.forEach.call($buttonsNumbers, (button) => {
        button.addEventListener("click", handleClickNumber, false);
    });

    Array.prototype.forEach.call($buttonsOperations, (button) => {
        button.addEventListener("click", handleClickOperation, false);
    });

    $buttonsCE.addEventListener("click", handleClickCE, false);
    $buttonEqual.addEventListener("click", handleClickEqual, false);

    function handleClickCE() {
        $visor.value = 0;
    }

    function handleClickOperation() {
        $visor.value = removeLastItemIfItIsAnOperator($visor.value);
        $visor.value += this.value;
    }

    function handleClickNumber() {
        $visor.value += this.value;
    }

    function isLastItemAnOperation(number) {
        let operations = ["+", "-", "x", "/"];
        let lastItem = number.split("").pop();
        return operations.some((operator) => {
            return operator === lastItem;
        });
    }

    function removeLastItemIfItIsAnOperator(number) {
        if (isLastItemAnOperation(number)) return number.slice(0, -1);
        return number;
    }

    function handleClickEqual() {
        $visor.value = removeLastItemIfItIsAnOperator($visor.value);
        let allValues = $visor.value.match(/\d+[+x/-]?/g);
        $visor.value = allValues.reduce((accumulated, actual) => {
            let firstValue = accumulated.slice(0, -1);
            let operator = accumulated.split("").pop();
            let lastValue = removeLastItemIfItIsAnOperator(actual);
            let lastOperator = isLastItemAnOperation(actual) ? actual.split("").pop() : "";
            switch (operator) {
                case "+":
                    return Number(firstValue) + Number(lastValue) + lastOperator;
                case "-":
                    return Number(firstValue) - Number(lastValue) + lastOperator;
                case "x":
                    return Number(firstValue) * Number(lastValue) + lastOperator;
                case "/":
                    return Number(firstValue) / Number(lastValue) + lastOperator;
            }
        });
    }

})(window, document);
