var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.subtract = function (a, b) {
        return a - b;
    };
    Calculator.prototype.displayResult = function (result) {
        console.log("result: ".concat(result));
    };
    return Calculator;
}());
var calculator = new Calculator();
var Sum = calculator.add(5, 3);
calculator.displayResult(Sum);
var Subtract = calculator.subtract(5, 3);
calculator.displayResult(Subtract);
