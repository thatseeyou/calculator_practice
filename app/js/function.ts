function initAction() {
    let inputButtonIdArray: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    let operationArray: string[] = ['add', 'multiple', 'subtraction', 'division', 'equal', 'percent', 'reverse', 'initValue'];

    inputButtonIdArray.forEach(idx => {
        let tmp = document.getElementById(idx);

        if (tmp != null) {
            tmp.onclick = function () {
                cal.setParameter(idx);
            };
        }
    });

    operationArray.forEach(operation => {
        let tmp = document.getElementById(operation)
        if (tmp != null) {
            switch (operation) {
                case 'add': tmp.onclick = function () { cal.setOperator('add'); }; break;
                case 'multiple': tmp.onclick = function () { cal.setOperator('muliple'); }; break;
                case 'subtraction': tmp.onclick = function () { cal.setOperator('subtraction'); }; break;
                case 'division': tmp.onclick = function () { cal.setOperator('division'); }; break;
                case 'equal': tmp.onclick = function () { cal.calculator(1); }; break;
                case 'percent': tmp.onclick = function () { cal.transformValue('percent'); }; break;
                case 'reverse': tmp.onclick = function () { cal.transformValue('reverse'); }; break;
                case 'initValue': tmp.onclick = function () { cal.init(); }; break;
            }
        }
    })
};