(function (win, doc) {
    "use strict";

    const numbers = doc.querySelectorAll('[class="calc"]');
    const input = doc.querySelector("input");
    const ce = doc.querySelector('[class="clear"]');
    const equal = doc.querySelector('[class="calculate"]');
    const div = doc.querySelector('[class="div"');
    const mult = doc.querySelector('[class="mult"]');
    const sub = doc.querySelector('[class="sub"]');
    const sum = doc.querySelector('[class="sum"]');

    function handleOperation(operator) {
        if (input.value.length === 0) return;

        let content = input.value.match(/./g);
        let last = content.length - 1;

        if (
            content[last] === "/" ||
            content[last] === "*" ||
            content[last] === "-" ||
            content[last] === "+"
        ) {
            content[last] = operator;
            input.value = content.join("");
        } else input.value += operator;
    }

    function handleCalculate() {
        let result;
        let op = 1;
        const expression = input.value.match(/(\d*)([+*-\/])(\d*)/g);
        expression.forEach((item) => {
            op = item.match(/(\d*)?([+*-\/])(\d*)/);
            if (op[1]) result = Number(op[1]);

            switch (op[2]) {
                case "+":
                    result = result + Number(op[3]);

                    break;
                case "-":
                    result = result - Number(op[3]);

                    break;
                case "*":
                    result = result * Number(op[3]);

                    break;
                case "/":
                    result = result / Number(op[3]);
                    break;

                default:
                    break;
            }
        });
        input.value = String(result);
    }

    Array.prototype.forEach.call(numbers, (number, index) =>
        number.addEventListener("click", () => (input.value += index))
    );

    ce.addEventListener("click", () => (input.value = ""));
    equal.addEventListener("click", () => handleCalculate());

    div.addEventListener("click", () => handleOperation("/"));
    mult.addEventListener("click", () => handleOperation("*"));
    sub.addEventListener("click", () => handleOperation("-"));
    sum.addEventListener("click", () => handleOperation("+"));
})(window, document);
