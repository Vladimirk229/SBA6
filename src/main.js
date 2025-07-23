"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiService_1 = require("./services/apiService");
const discountCalculator_1 = require("./utils/discountCalculator");
const taxCalculator_1 = require("./utils/taxCalculator");
const errorHandler_1 = require("./utils/errorHandler");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const products = yield (0, apiService_1.fetchProducts)();
            for (const product of products) {
                product.displayDetails();
                const discount = (0, discountCalculator_1.calculateDiscount)(product);
                const tax = (0, taxCalculator_1.calculateTax)(product);
                const finalPrice = product.getPriceWithDiscount() + tax;
                console.log(`Discount: $${discount.toFixed(2)}`);
                console.log(`Tax: $${tax.toFixed(2)}`);
                console.log(`Final Price: $${finalPrice.toFixed(2)}`);
                console.log('------------------------');
            }
        }
        catch (error) {
            (0, errorHandler_1.handleError)(error);
        }
    });
}
main();
