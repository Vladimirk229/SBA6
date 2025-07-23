"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDiscount = calculateDiscount;
function calculateDiscount(product) {
    return (product.price * product.discountPercentage) / 100;
}
