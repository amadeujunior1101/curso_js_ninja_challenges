(function (win, doc) {
    "use strict";

    const $visor = doc.querySelector('[data-js="visor"]');
    const $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');
    const $buttonsOperations = doc.querySelectorAll('[data-js="button-operation"]');
    const $buttonsCE = doc.querySelector('[data-js="button-ce"]');
    const $buttonEqual = doc.querySelector('[data-js="button-equal"]');

    function initialize() {
        initEvents();
    }

    function initEvents() {
        Array.prototype.forEach.call($buttonsNumbers, (button) => {
            button.addEventListener("click", handleClickNumber, false);
        });
        Array.prototype.forEach.call($buttonsOperations, (button) => {
            button.addEventListener("click", handleClickOperation, false);
        });
        $buttonsCE.addEventListener("click", handleClickCE, false);
        $buttonEqual.addEventListener("click", handleClickEqual, false);
    }

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
        let operations = getOperations();
        let lastItem = number.split("").pop();
        return operations.some((operator) => {
            return operator === lastItem;
        });
    }

    function getOperations() {
        return Array.prototype.map.call($buttonsOperations, (button) => {
            return button.value;
        });
        // return ["+", "-", "x", "/"];
    }

    function removeLastItemIfItIsAnOperator(string) {
        if (isLastItemAnOperation(string)) return string.slice(0, -1);
        return string;
    }

    function handleClickEqual() {
        $visor.value = removeLastItemIfItIsAnOperator($visor.value);
        let allValues = $visor.value.match(getRegexOperations());
        $visor.value = allValues.reduce(calculateAllvalues);
    }

    function getRegexOperations() {
        return new RegExp("\\d+[" + getOperations().join("") + "]?", "g");
    }

    function calculateAllvalues(accumulated, actual) {
        let firstValue = accumulated.slice(0, -1);
        let operator = accumulated.split("").pop();
        let lastValue = removeLastItemIfItIsAnOperator(actual);
        let lastOperator = getLastOperator(actual);
        return doOperation(firstValue, operator, lastValue) + lastOperator;
    }

    function getLastOperator(value) {
        return isLastItemAnOperation(value) ? value.split("").pop() : "";
    }

    function doOperation(firstValue, operator, lastValue) {
        switch (operator) {
            case "+":
                return Number(firstValue) + Number(lastValue);
            case "-":
                return Number(firstValue) - Number(lastValue);
            case "x":
                return Number(firstValue) * Number(lastValue);
            case "/":
                return Number(firstValue) / Number(lastValue);
        }
    }

    initialize();
})(window, document);
