class operation {
    add(a: number, b: number): number { return a + b; }
    multiple(a: number, b: number): number { return a * b; };
    subtraction(a: number, b: number): number { return a - b; };
    division(a: number, b: number): number { return a / b; };
    equal(): void { cal.calculator(); };
    percent(a: number): number { return a / 100; };
    reverse(a: number): number { return -a; };
}

class Calculator extends operation {
    constructor(
        private _parameterA: string = "",
        private _parameterB: string = "",
        private _operator = "",
        private _tmpA: string = ""
    )
    { super(); };

    calculator(excuteType: number = 0) {
        let resultValue: number = 0;
        let intParameterA: number = 0;
        let intParameterB: number = parseFloat(this._parameterB);

        if (excuteType == 1) {
            intParameterA = parseFloat(this._tmpA);
        } else {
            intParameterA = parseFloat(this._parameterA);
        }

        switch (this._operator) {
            case 'add': resultValue = this.add(intParameterB, intParameterA); break;
            case 'muliple': resultValue = this.multiple(intParameterB, intParameterA); break;
            case 'subtraction': resultValue = this.subtraction(intParameterB, intParameterA); break;
            case 'division': resultValue = this.division(intParameterB, intParameterA); break;
            default: return;
        }
        this._parameterB = String(resultValue);
        this.viewResult(this._parameterB);
    };
    transformValue(type: string) {
        let resultValue: number = 0;
        let intParameterA: number = parseFloat(this._parameterA);
        switch (type) {
            case 'percent': resultValue = this.percent(intParameterA); break;
            case 'reverse': resultValue = this.reverse(intParameterA); break;
        }
        this._parameterA = String(resultValue);
        this.viewResult(this._parameterA);
    };
    init() {
        this._parameterA = "0";
        this._parameterB = "";
        this._operator = "";
        this._tmpA = "";

        this.viewResult(this._parameterA);
    };
    setParameter(setNumberA: string) {
        if (setNumberA == ".") {
            if (this._parameterA.indexOf(".") == -1) {
                if (this._parameterA == "0") {
                    this._parameterA = "0" + setNumberA;
                } else {
                    this._parameterA += setNumberA;
                }
            } else {
                return;
            }
        } else {
            if (this._parameterA == "0") {
                this._parameterA = setNumberA;
            } else {
                this._parameterA += setNumberA;
            }
        }

        this._tmpA = this._parameterA;
        this.viewResult(this._parameterA);
    };
    viewResult(result: string) {
        let viewObj = document.getElementById("result-view");
        if (viewObj != null) {
            viewObj.innerText = result;
        }
    }
    setOperator(op: string) {
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
    getViewValue(): string {
        let viewObj = document.getElementById("result-view");
        if (viewObj != null) {
            return viewObj.innerText;
        } else {
            return "";
        }
    }
}


let cal = new Calculator();

window.onload = () => {
    cal.init();
    initAction();
}