"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTax = calculateTax;
function calculateTax(product) {
    const standardRate = 0.0475;
    const groceryRate = 0.03;
    const applicableRate = product.category === 'groceries' ? groceryRate : standardRate;
    return product.price * applicableRate;
}
