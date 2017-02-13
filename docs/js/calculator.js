var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var operation = (function () {
    function operation() {
    }
    operation.prototype.add = function (a, b) { return a + b; };
    operation.prototype.multiple = function (a, b) { return a * b; };
    ;
    operation.prototype.subtraction = function (a, b) { return a - b; };
    ;
    operation.prototype.division = function (a, b) { return a / b; };
    ;
    operation.prototype.equal = function () { cal.calculator(); };
    ;
    operation.prototype.percent = function (a) { return a / 100; };
    ;
    operation.prototype.reverse = function (a) { return -a; };
    ;
    return operation;
}());
var Calculator = (function (_super) {
    __extends(Calculator, _super);
    function Calculator(_parameterA, _parameterB, _operator, _tmpA) {
        if (_parameterA === void 0) { _parameterA = ""; }
        if (_parameterB === void 0) { _parameterB = ""; }
        if (_operator === void 0) { _operator = ""; }
        if (_tmpA === void 0) { _tmpA = ""; }
        var _this = _super.call(this) || this;
        _this._parameterA = _parameterA;
        _this._parameterB = _parameterB;
        _this._operator = _operator;
        _this._tmpA = _tmpA;
        return _this;
    }
    ;
    Calculator.prototype.calculator = function (excuteType) {
        if (excuteType === void 0) { excuteType = 0; }
        var resultValue = 0;
        var intParameterA = 0;
        var intParameterB = parseFloat(this._parameterB);
        if (excuteType == 1) {
            intParameterA = parseFloat(this._tmpA);
        }
        else {
            intParameterA = parseFloat(this._parameterA);
        }
        switch (this._operator) {
            case 'add':
                resultValue = this.add(intParameterB, intParameterA);
                break;
            case 'muliple':
                resultValue = this.multiple(intParameterB, intParameterA);
                break;
            case 'subtraction':
                resultValue = this.subtraction(intParameterB, intParameterA);
                break;
            case 'division':
                resultValue = this.division(intParameterB, intParameterA);
                break;
            default: return;
        }
        this._parameterB = String(resultValue);
        this.viewResult(this._parameterB);
    };
    ;
    Calculator.prototype.transformValue = function (type) {
        var resultValue = 0;
        var intParameterA = parseFloat(this._parameterA);
        switch (type) {
            case 'percent':
                resultValue = this.percent(intParameterA);
                break;
            case 'reverse':
                resultValue = this.reverse(intParameterA);
                break;
        }
        this._parameterA = String(resultValue);
        this.viewResult(this._parameterA);
    };
    ;
    Calculator.prototype.init = function () {
        this._parameterA = "0";
        this._parameterB = "";
        this._operator = "";
        this._tmpA = "";
        this.viewResult(this._parameterA);
    };
    ;
    Calculator.prototype.setParameter = function (setNumberA) {
        if (setNumberA == ".") {
            if (this._parameterA.indexOf(".") == -1) {
                if (this._parameterA == "0") {
                    this._parameterA = "0" + setNumberA;
                }
                else {
                    this._parameterA += setNumberA;
                }
            }
            else {
                return;
            }
        }
        else {
            if (this._parameterA == "0") {
                this._parameterA = setNumberA;
            }
            else {
                this._parameterA += setNumberA;
            }
        }
        this._tmpA = this._parameterA;
        this.viewResult(this._parameterA);
    };
    ;
    Calculator.prototype.viewResult = function (result) {
        var viewObj = document.getElementById("result-view");
        if (viewObj != null) {
            viewObj.innerText = result;
        }
    };
    Calculator.prototype.setOperator = function (op) {
        if (this._operator !== "") {
            if (this._parameterB !== this.getViewValue()) {
                this.calculator();
            }
        }
        this._parameterB = this.getViewValue();
        this._operator = op;
        this._tmpA = this._parameterA;
        this._parameterA = "";
    };
    ;
    Calculator.prototype.getViewValue = function () {
        var viewObj = document.getElementById("result-view");
        if (viewObj != null) {
            return viewObj.innerText;
        }
        else {
            return "";
        }
    };
    return Calculator;
}(operation));
var cal = new Calculator();
window.onload = function () {
    cal.init();
    initAction();
};
