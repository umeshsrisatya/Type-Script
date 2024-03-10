"use strict";
function calculateTax(income) {
    if (income <= 100000) {
        return income * 1.2;
    }
    return 0;
}
console.log(calculateTax(120000));
//# sourceMappingURL=index.js.map